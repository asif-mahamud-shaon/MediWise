'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import PatientSidebar from '@/components/PatientSidebar';
import api from '@/lib/api';
import { format, parseISO } from 'date-fns';
import { FiFileText, FiPrinter, FiCalendar, FiDownload, FiX } from 'react-icons/fi';
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';
import { formatDoctorName } from '@/utils/doctorName';

export default function PatientPrescriptionsPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const fetchPrescriptions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/prescriptions?limit=100');
      let allPrescriptions = response.data.prescriptions || [];
      
      // Filter prescriptions for current patient
      allPrescriptions = allPrescriptions.filter((prescription: any) => 
        prescription.patient?.email === user?.email || prescription.patientId === user?.id
      );
      
      // Sort by date (newest first)
      allPrescriptions.sort((a: any, b: any) => 
        new Date(b.prescriptionDate).getTime() - new Date(a.prescriptionDate).getTime()
      );
      
      setPrescriptions(allPrescriptions);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }
    if (user && user.role !== 'patient') {
      if (user.role === 'admin') {
        router.push('/admin/dashboard');
      } else if (user.role === 'doctor') {
        router.push('/doctor/dashboard');
      } else {
        router.push('/dashboard');
      }
      return;
    }
    if (user && user.role === 'patient') {
      fetchPrescriptions();
    }
  }, [user, authLoading, router, fetchPrescriptions]);

  // Memoize month names to avoid recreating array
  const monthNames = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);

  const handlePrint = useCallback((prescription: any) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const doctorProfile = prescription.doctor;
    const patientInfo = prescription.patient || user;
    const prescriptionDate = new Date(prescription.prescriptionDate);
    const day = String(prescriptionDate.getDate()).padStart(2, '0');
    const month = monthNames[prescriptionDate.getMonth()];
    const year = prescriptionDate.getFullYear();
    const dateOnly = `${day} ${month}, ${year}`;
    const timeOnly = format(prescriptionDate, 'h:mm a');

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Prescription - ${patientInfo?.name || 'Patient'}</title>
          <style>
            @media print {
              @page {
                margin: 15mm;
                size: A4;
              }
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Times New Roman', serif;
              font-size: 11pt;
              line-height: 1.6;
              color: #000;
              background: #fff;
              padding: 20px;
              max-width: 100%;
              position: relative;
              overflow: hidden;
            }
            body::before {
              content: 'MediWise';
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              font-size: 150pt;
              font-weight: bold;
              color: rgba(0, 102, 102, 0.15);
              z-index: 0;
              pointer-events: none;
              white-space: nowrap;
              text-shadow: 0 0 10px rgba(0, 102, 102, 0.1);
            }
            .container {
              position: relative;
              z-index: 1;
              max-width: 100%;
            }
            .header {
              border-bottom: 3px solid #000;
              padding-bottom: 15px;
              margin-bottom: 15px;
            }
            .header-top {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            .doctor-info-left {
              flex: 1;
            }
            .logo-container {
              width: 180px;
              height: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
            }
            .logo-image {
              max-width: 100%;
              height: auto;
              object-fit: contain;
            }
            .doctor-name {
              font-size: 22pt;
              font-weight: bold;
              color: #006666;
              margin-bottom: 8px;
            }
            .doctor-details {
              font-size: 10pt;
              margin-bottom: 3px;
            }
            .date-time {
              text-align: right;
              font-size: 10pt;
              font-weight: bold;
            }
            .two-column-layout {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              margin-top: 15px;
              position: relative;
            }
            .two-column-layout::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 0;
              bottom: 0;
              width: 3px;
              background-color: #0066cc;
              transform: translateX(-50%);
              z-index: 1;
            }
            .left-column, .right-column {
              display: flex;
              flex-direction: column;
              gap: 25px;
              position: relative;
              z-index: 2;
              background: white;
            }
            .section {
              padding-bottom: 0;
              margin-bottom: 0;
            }
            .section-title {
              font-size: 12pt;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .section-content {
              font-size: 10pt;
              white-space: pre-wrap;
              line-height: 1.8;
              min-height: 40px;
            }
            .medicines-content {
              font-family: 'Courier New', monospace;
              font-size: 10pt;
            }
            .footer {
              margin-top: 40px;
              border-top: 2px solid #000;
              padding-top: 20px;
              font-size: 10pt;
              text-align: center;
            }
            .company-name {
              font-weight: bold;
              font-size: 12pt;
              margin-bottom: 8px;
              color: #006666;
              text-align: center;
            }
            .footer-text {
              font-size: 9pt;
              line-height: 1.6;
              margin-bottom: 5px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              flex-wrap: wrap;
            }
            .hotline {
              font-weight: bold;
              color: #006666;
              margin-top: 8px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              flex-wrap: wrap;
            }
            @media print {
              body::before {
                display: block;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-top">
                <div class="doctor-info-left">
                  <div class="doctor-name">${(() => {
                    const name = doctorProfile?.user?.name || '';
                    const cleanName = name.replace(/^dr\.?\s*/i, '');
                    return `Dr. ${cleanName}`;
                  })()}</div>
                  ${doctorProfile?.qualification ? `<div class="doctor-details">${doctorProfile.qualification}</div>` : ''}
                  ${doctorProfile?.specialization ? `<div class="doctor-details">${doctorProfile.specialization}</div>` : ''}
                  ${doctorProfile?.department?.name ? `<div class="doctor-details">${doctorProfile.department.name}</div>` : ''}
                </div>
                <div class="logo-container">
                  <img src="/logo.png" alt="MediWise Logo" class="logo-image" onerror="this.style.display='none';" />
                </div>
              </div>
              <div style="border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                  ${(() => {
                    const fullName = patientInfo?.name || '';
                    const namePart = fullName ? `Patient: ${fullName}` : '';
                    const age = prescription.age ? `    Age: ${prescription.age}` : '';
                    return [namePart, age].filter(Boolean).join(' ');
                  })()}
                </div>
                <div class="date-time">
                  Date: ${dateOnly} Time: ${timeOnly}
                </div>
              </div>
            </div>
            
            <div class="two-column-layout">
              <div class="left-column">
                ${prescription.diagnosis ? `
                <div class="section">
                  <div class="section-title">Diagnosis</div>
                  <div class="section-content">${prescription.diagnosis}</div>
                </div>
                ` : ''}
                
                ${prescription.tests ? `
                <div class="section">
                  <div class="section-title">Investigation</div>
                  <div class="section-content">${prescription.tests}</div>
                </div>
                ` : ''}

                ${(prescription.followUp || prescription.instructions) ? `
                <div class="section">
                  <div class="section-title">Follow up</div>
                  <div class="section-content">${prescription.followUp || prescription.instructions}</div>
                </div>
                ` : ''}
              </div>

              <div class="right-column">
                ${prescription.medicines ? `
                <div class="section">
                  <div class="section-title">Medicine</div>
                  <div class="section-content medicines-content">${typeof prescription.medicines === 'string' ? prescription.medicines : (Array.isArray(prescription.medicines) ? prescription.medicines.map((med: any) => typeof med === 'string' ? med : (med.name || med)).join('\\n') : prescription.medicines)}</div>
                </div>
                ` : ''}

                ${(prescription.advice || prescription.rules) ? `
                <div class="section">
                  <div class="section-title">Advice</div>
                  <div class="section-content">${prescription.advice || prescription.rules}</div>
                </div>
                ` : ''}
              </div>
            </div>

            <div class="footer">
              <div class="footer-info">
                <div class="company-name">MediWise</div>
                <div class="footer-text" style="font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;">
                  <span>চেম্বার: মেডিওয়াইজ কনসালটেশন সেন্টার</span>
                  <span>/</span>
                  <span>Chamber: MediWise Consultation Center</span>
                </div>
                <div class="hotline" style="font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;">
                  <span>সিরিয়ালের জন্য হটলাইন</span>
                  <span>/</span>
                  <span>Hotline for Serial: <strong>+8809658303665</strong></span>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }, [user, monthNames]);

  const handleViewPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
    setShowPreviewModal(true);
  };

  // Generate prescription data URL for QR code - Direct PDF download
  const generatePrescriptionDataURL = (prescription: any) => {
    if (typeof window === 'undefined') return '';
    
    const prescriptionData = {
      id: prescription.id,
      patientName: prescription.patient?.name || user?.name,
      doctorName: prescription.doctor?.user?.name,
      date: prescription.prescriptionDate,
      diagnosis: prescription.diagnosis,
      medicines: prescription.medicines,
      tests: prescription.tests,
      advice: prescription.advice,
      instructions: prescription.instructions,
      followUp: prescription.followUp,
    };
    
    // Create a data URL that will trigger direct PDF download when scanned
    const dataStr = JSON.stringify(prescriptionData);
    const base64Data = btoa(unescape(encodeURIComponent(dataStr)));
    return `${window.location.origin}/prescription/${prescription.id}/download?data=${encodeURIComponent(base64Data)}`;
  };

  // Generate medicine-specific QR code data - Direct PDF download
  const generateMedicineQRData = (prescription: any, medicine: any, index: number) => {
    if (typeof window === 'undefined') return '';
    
    const medicineData = {
      prescriptionId: prescription.id,
      medicineIndex: index,
      medicine: typeof medicine === 'string' ? medicine : medicine.name || medicine,
      dosage: typeof medicine === 'object' ? medicine.dosage : '',
      frequency: typeof medicine === 'object' ? medicine.frequency : '',
      patientName: prescription.patient?.name || user?.name,
      doctorName: prescription.doctor?.user?.name,
      date: prescription.prescriptionDate,
    };
    
    const dataStr = JSON.stringify(medicineData);
    const base64Data = btoa(unescape(encodeURIComponent(dataStr)));
    return `${window.location.origin}/prescription/${prescription.id}/medicine/${index}/download?data=${encodeURIComponent(base64Data)}`;
  };

  // Download prescription as image
  const downloadPrescriptionAsImage = async () => {
    const prescriptionElement = document.getElementById('prescription-view-content');
    if (!prescriptionElement) return;

    try {
      const canvas = await html2canvas(prescriptionElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `prescription-${selectedPrescription?.id || 'download'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  if (authLoading || loading) {
    return <Loading />;
  }

  if (!user || user.role !== 'patient') {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar user={user} logout={logout} />
      <main className="w-full lg:ml-64 flex-1 transition-all duration-300">
        {/* Modern Header with Simple Color */}
        <header className="bg-teal-600 text-white shadow-xl">
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Prescriptions</h1>
              <p className="text-sm sm:text-base text-teal-100">View and manage your medical prescriptions</p>
            </div>
          </div>
        </header>

        <div className="p-8">
          {prescriptions.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center border-2 border-gray-300">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiFileText className="text-4xl text-teal-600" />
              </div>
              <p className="text-gray-600 text-lg mb-2 font-semibold">No prescriptions found</p>
              <p className="text-gray-500 text-sm">
                Your prescriptions will appear here once your doctor creates them
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {prescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-300 hover:shadow-2xl transition-all transform hover:scale-[1.01]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center shadow-lg">
                          <FiFileText className="text-2xl text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {prescription.doctor?.user?.name 
                              ? `Dr. ${prescription.doctor.user.name}`
                              : 'Prescription'}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                            <div className="flex items-center gap-2">
                              <FiCalendar className="text-teal-600" />
                              <span className="font-medium">
                                {format(new Date(prescription.prescriptionDate), 'MMMM dd, yyyy')}
                              </span>
                            </div>
                            {prescription.doctor?.specialization && (
                              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold">
                                {prescription.doctor.specialization}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewPrescription(prescription)}
                        className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all flex items-center gap-2 font-bold transform hover:scale-105"
                      >
                        <FiFileText className="w-5 h-5" />
                        View
                      </button>
                      <button
                        onClick={() => handlePrint(prescription)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all flex items-center gap-2 font-bold transform hover:scale-105"
                      >
                        <FiPrinter className="w-5 h-5" />
                        Print
                      </button>
                    </div>
                  </div>

                  {prescription.diagnosis && (
                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Diagnosis:</h4>
                      <p className="text-gray-600 dark:text-gray-400">{prescription.diagnosis}</p>
                    </div>
                  )}

                  {prescription.medicines && (
                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Medicines:</h4>
                      <div className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {typeof prescription.medicines === 'string' 
                          ? prescription.medicines 
                          : prescription.medicines.map((med: any, index: number) => (
                              <div key={index} className="mb-1">
                                {med.name}
                                {med.dosage && ` - ${med.dosage}`}
                                {med.frequency && ` (${med.frequency})`}
                              </div>
                            ))}
                      </div>
                    </div>
                  )}

                  {prescription.instructions && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Instructions:</h4>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{prescription.instructions}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Prescription Slide-in View from Right */}
      {showPreviewModal && selectedPrescription && (() => {
        const doctorProfile = selectedPrescription.doctor;
        const patientInfo = selectedPrescription.patient || user;
        const prescriptionDate = new Date(selectedPrescription.prescriptionDate);
        const day = String(prescriptionDate.getDate()).padStart(2, '0');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[prescriptionDate.getMonth()];
        const year = prescriptionDate.getFullYear();
        const dateOnly = `${day} ${month}, ${year}`;
        
        const mainQRUrl = generatePrescriptionDataURL(selectedPrescription);
        const medicines = Array.isArray(selectedPrescription.medicines) 
          ? selectedPrescription.medicines 
          : (typeof selectedPrescription.medicines === 'string' 
              ? selectedPrescription.medicines.split('\n').filter(Boolean).map((m: string) => m.trim())
              : []);

        return (
          <>
            {/* Backdrop - Semi-transparent overlay, original page visible */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity"
              onClick={() => {
                setShowPreviewModal(false);
                setSelectedPrescription(null);
              }}
            />
            
            {/* Slide-in Panel from Right */}
            <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto animate-slideInRight">
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowPreviewModal(false);
                  setSelectedPrescription(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Prescription Content */}
              <div id="prescription-view-content" className="p-6" style={{ fontFamily: "'Times New Roman', serif" }}>
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Printout to redeem your e-prescription</h2>
                </div>

                {/* Patient Info Section with Main QR Code */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="text-lg font-bold mb-2">FOR {patientInfo?.name?.toUpperCase() || 'PATIENT'}</div>
                    {patientInfo?.dateOfBirth && (
                      <div className="text-sm">BORN {format(new Date(patientInfo.dateOfBirth), 'dd.MM.yyyy')}</div>
                    )}
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <div className="bg-white p-3 rounded-lg border-2 border-gray-300 shadow-lg">
                      <QRCodeSVG 
                        value={mainQRUrl}
                        size={140}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center max-w-[140px] font-semibold" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      codes to redeem all prescriptions
                    </p>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="mb-6 pb-4 border-b border-gray-300">
                  <div className="text-lg font-bold mb-2">
                    FROM {formatDoctorName(doctorProfile?.user?.name || '', doctorProfile?.qualification).toUpperCase()}
                  </div>
                  {doctorProfile?.specialization && (
                    <div className="text-sm mb-1">{doctorProfile.specialization}</div>
                  )}
                  {doctorProfile?.user?.phone && (
                    <div className="text-sm">{doctorProfile.user.phone}</div>
                  )}
                  {doctorProfile?.user?.email && (
                    <div className="text-sm">{doctorProfile.user.email}</div>
                  )}
                  <div className="text-sm font-bold mt-2">DATE {dateOnly}</div>
                </div>

                {/* Medicine QR Codes Section */}
                {medicines.length > 0 && (
                  <div className="mb-6">
                    {medicines.map((med: any, index: number) => {
                      const medicineName = typeof med === 'string' ? med : (med.name || med);
                      const medicineQRUrl = generateMedicineQRData(selectedPrescription, med, index);
                      const dosage = typeof med === 'object' && med.dosage ? med.dosage : '';
                      const frequency = typeof med === 'object' && med.frequency ? med.frequency : '';
                      const pzn = selectedPrescription.id.slice(0, 8);
                      
                      return (
                        <div key={index} className="mb-4 flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-white p-2 rounded border border-gray-200">
                              <QRCodeSVG 
                                value={medicineQRUrl}
                                size={100}
                                level="H"
                                includeMargin={true}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold">
                              {dosage ? `${dosage} - ` : ''}{medicineName}
                            </div>
                            {frequency && (
                              <div className="text-xs text-gray-600 mt-1">{frequency}</div>
                            )}
                            <div className="text-xs text-gray-500 mt-1">PZN: {pzn}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* App Download Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <QRCodeSVG 
                          value="https://mediwise.com/app"
                          size={80}
                          level="H"
                          includeMargin={true}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold mb-1">App for e-prescription</div>
                      <div className="text-xs text-gray-600">
                        Receive your e-prescriptions paperless now and download the app.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8 pb-4">
                  <button
                    onClick={downloadPrescriptionAsImage}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <FiDownload className="w-5 h-5" />
                    Save
                  </button>
                  <button
                    onClick={() => handlePrint(selectedPrescription)}
                    className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <FiPrinter className="w-5 h-5" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })()}
    </div>
  );
}