module.exports=[84195,a=>{"use strict";var b=a.i(37037),c=a.i(4839),d=a.i(99752),e=a.i(25941),f=a.i(66733),g=a.i(13247),h=a.i(379),i=a.i(97005),j=a.i(35557),k=a.i(9807),l=a.i(8315);function m(){let a,m,n,o,p,q,r,s,t,u,v,{user:w,loading:x,logout:y}=(0,d.useAuth)(),{showNotification:z}=(0,e.useNotification)(),A=(0,f.useRouter)(),B=(0,f.useSearchParams)(),[C,D]=(0,c.useState)([]),[E,F]=(0,c.useState)(!0),[G,H]=(0,c.useState)(!1),[I,J]=(0,c.useState)(""),[K,L]=(0,c.useState)(!1),[M,N]=(0,c.useState)(null),O=a=>{let b=["i","ii","iii","iv","v","vi","vii","viii","ix","x"];return a<=b.length?b[a-1]:String(a)},[P,Q]=(0,c.useState)({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),[R,S]=(0,c.useState)(null),[T,U]=(0,c.useState)(null),[V,W]=(0,c.useState)(!1),[X,Y]=(0,c.useState)(!1),[Z,$]=(0,c.useState)(!1),[_,aa]=(0,c.useState)(""),[ab,ac]=(0,c.useState)([]),[ad,ae]=(0,c.useState)(!1),[af,ag]=(0,c.useState)(null);(0,c.useEffect)(()=>{x||w&&"doctor"===w.role||A.push("/login")},[w,x,A]),(0,c.useEffect)(()=>{w&&"doctor"===w.role&&(ah(),ai(),am())},[w]),(0,c.useEffect)(()=>{if(P.patientEmail&&G){let a=setTimeout(()=>{aj(P.patientEmail)},500);return()=>clearTimeout(a)}U(null)},[P.patientEmail,G]),(0,c.useEffect)(()=>{let a=B.get("patientEmail");a&&(Q(b=>({...b,patientEmail:decodeURIComponent(a)})),H(!0),A.replace("/doctor/prescriptions",{scroll:!1}))},[B,A]);let ah=async()=>{try{F(!0);let a=await i.default.get("/prescriptions?limit=100");D(a.data.prescriptions||[])}catch(a){console.error("Error fetching prescriptions:",a)}finally{F(!1)}},ai=async()=>{try{let a=await i.default.get("/doctors/profile/me");S(a.data.doctor)}catch(a){console.error("Error fetching doctor profile:",a)}},aj=async a=>{if(!a||!a.includes("@"))return void U(null);try{W(!0);let b=null;try{let c=await i.default.get(`/admin/users?email=${encodeURIComponent(a)}&role=patient&limit=1`);c.data.users&&c.data.users.length>0&&(b=c.data.users[0])}catch(c){try{let c=((await i.default.get("/prescriptions?limit=100")).data.prescriptions||[]).find(b=>b.patient?.email===a);c?.patient&&(b=c.patient)}catch(a){console.error("Error fetching patient from prescriptions:",a)}}if(b){let a="";if(b.dateOfBirth){let c=new Date(b.dateOfBirth),d=new Date,e=d.getFullYear()-c.getFullYear(),f=d.getMonth()-c.getMonth();(f<0||0===f&&d.getDate()<c.getDate())&&e--,a=`${e} years`}U({...b,age:a})}else U(null)}catch(a){console.error("Error fetching patient info:",a),U(null)}finally{W(!1)}},ak=async()=>{if(!I.trim())return void z("Please describe the patient's problem first","error");try{L(!0);let a=await i.default.post("/prescriptions/ai-suggestions",{problem:I.trim()});N(a.data.suggestions)}catch(a){console.error("Error fetching AI suggestions:",a),z(a.response?.data?.message||"Failed to generate AI suggestions","error")}finally{L(!1)}},al=async a=>{a&&a.preventDefault();try{let a=P.medicines.split("\n").map(a=>a.trim()).filter(a=>a.length>0).map(a=>{let b=a.split("-").map(a=>a.trim());return{name:b[0]||a,dosage:b[1]||"",frequency:b[2]||""}}),b=P.tests.split("\n").map(a=>a.trim()).filter(a=>a.length>0).map(a=>({name:a,description:""})),c=P.rules.split("\n").map(a=>a.trim()).filter(a=>a.length>0).map(a=>({title:a,description:""})),d=[P.instructions,P.followUp&&`Follow-up:
${P.followUp}`].filter(Boolean).join("\n\n"),e=c.length>0?c:P.advice?P.advice.split("\n").filter(a=>a.trim()).map(a=>({title:a.trim(),description:""})):[];await i.default.post("/prescriptions",{patientEmail:P.patientEmail,diagnosis:P.diagnosis,medicines:a,tests:b,rules:e,instructions:d||P.instructions}),z("Prescription created successfully","success"),H(!1),Q({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),J(""),N(null),ag(null),aa(""),ah()}catch(a){z(a.response?.data?.message||"Failed to create prescription","error")}},am=async()=>{try{ae(!0);let a=await i.default.get("/templates");ac(a.data.templates||[])}catch(a){console.error("Error fetching templates:",a)}finally{ae(!1)}},an=async()=>{try{if(!_.trim())return void z("Please enter a template name","error");af?(await i.default.put(`/templates/${af.id}`,{name:_,diagnosis:P.diagnosis,medicines:P.medicines,tests:P.tests,rules:P.rules,instructions:P.instructions,advice:P.advice,followUp:P.followUp}),z("Template updated successfully","success")):(await i.default.post("/templates",{name:_,diagnosis:P.diagnosis,medicines:P.medicines,tests:P.tests,rules:P.rules,instructions:P.instructions,advice:P.advice,followUp:P.followUp}),z("Template saved successfully","success")),$(!1),aa(""),ag(null),am()}catch(a){z(a.response?.data?.message||"Failed to save template","error")}},ao=async a=>{if(confirm("Are you sure you want to delete this template?"))try{await i.default.delete(`/templates/${a}`),z("Template deleted successfully","success"),am()}catch(a){z(a.response?.data?.message||"Failed to delete template","error")}},ap=()=>{let a,b,c,d,e,f,g,h,i,k=window.open("","_blank");if(!k)return;let l=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Prescription - ${T?.name||"Patient"}</title>
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
            /* Watermark Background */
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
            .doctor-name-bengali {
              font-size: 20pt;
              font-weight: bold;
              color: #006666;
              margin-bottom: 8px;
            }
            .doctor-details {
              font-size: 10pt;
              margin-bottom: 3px;
            }
            .doctor-details-bengali {
              font-size: 10pt;
              margin-bottom: 3px;
              color: #333;
            }
            .bilingual-section {
              margin-bottom: 10px;
            }
            .date-time {
              text-align: right;
              font-size: 10pt;
              font-weight: bold;
            }
            .patient-section {
              border-top: 2px solid #000;
              padding-top: 12px;
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            .patient-info-left {
              flex: 1;
            }
            .patient-label {
              font-size: 10pt;
              font-weight: bold;
              margin-bottom: 3px;
            }
            .patient-input {
              font-size: 10pt;
              padding: 5px;
              border: 2px solid #000;
              width: 100%;
              max-width: 300px;
            }
            .patient-info-right {
              text-align: right;
            }
            .patient-name {
              font-size: 12pt;
              font-weight: bold;
              margin-bottom: 3px;
            }
            .patient-details {
              font-size: 10pt;
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
              display: flex;
              align-items: center;
              gap: 5px;
            }
            .section-content {
              font-size: 10pt;
              white-space: pre-wrap;
              line-height: 1.8;
              min-height: 40px;
              padding: 0;
              border: none;
              font-family: inherit;
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
            .footer-content {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }
            .footer-logo {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 14pt;
              flex-shrink: 0;
            }
            .footer-info {
              flex: 1;
              line-height: 1.8;
              text-align: center;
            }
            .footer-info bengali {
              font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;
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
            <!-- Header Section -->
            <div class="header">
              <div class="header-top">
                <div class="doctor-info-left">
                  <div class="doctor-name">${(a=(R?.user?.name||w?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${a}`)}</div>
                  ${R?.qualification?`<div class="doctor-details">${R.qualification}</div>`:""}
                  ${R?.specialization?`<div class="doctor-details">${R.specialization}</div>`:""}
                  ${R?.department?.name?`<div class="doctor-details">${R.department.name}</div>`:""}
                  ${Array.isArray(R?.previousJobs)&&R.previousJobs.length>0?`
                    <div class="doctor-details">${R.previousJobs.map(a=>"string"==typeof a?a:a.title||a.position||a).join(", ")}</div>
                  `:""}
                </div>
                <div class="logo-container">
                  <img src="/logo.png" alt="MediWise Logo" class="logo-image" onerror="this.style.display='none';" />
                </div>
              </div>
              <div style="border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                  ${(c=(b=T?.name||"")?`Patient: ${b}`:"",[c,T?.age?`    Age: ${T.age}`:"",T?.weight?`Weight: ${T.weight}kg`:""].filter(Boolean).join(" "))}
                </div>
                <div class="date-time">
                  ${(e=String((d=new Date).getDate()).padStart(2,"0"),f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()],g=d.getFullYear(),h=`${e} ${f}, ${g}`,i=(0,j.format)(d,"h:mm a"),`Date: ${h} Time: ${i}`)}
                </div>
              </div>
            </div>
            

            <!-- Two Column Layout - Same as Form -->
            <div class="two-column-layout">
              <!-- Left Column -->
              <div class="left-column">
                ${P.diagnosis?`
                <div class="section">
                  <div class="section-title">Diagnosis</div>
                  <div class="section-content">${P.diagnosis}</div>
                </div>
                `:""}
                
                ${P.tests?`
                <div class="section">
                  <div class="section-title">Investigation</div>
                  <div class="section-content">${P.tests}</div>
                </div>
                `:""}

                ${P.followUp||P.instructions?`
                <div class="section">
                  <div class="section-title">Follow up</div>
                  <div class="section-content">${P.followUp||P.instructions}</div>
                </div>
                `:""}
              </div>

              <!-- Right Column -->
              <div class="right-column">
                ${P.medicines?`
                <div class="section">
                  <div class="section-title">Medicine</div>
                  <div class="section-content medicines-content">${P.medicines}</div>
                </div>
                `:""}

                ${P.advice||P.rules?`
                <div class="section">
                  <div class="section-title">Advice</div>
                  <div class="section-content">${P.advice||P.rules}</div>
                </div>
                `:""}
              </div>
            </div>

            <!-- Footer with Company Information -->
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
    `;k.document.write(l),k.document.close(),k.focus(),setTimeout(()=>{k.print()},250)};return x||E?(0,b.jsx)(g.default,{}):w&&"doctor"===w.role?(0,b.jsxs)("div",{className:"flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors",children:[(0,b.jsx)(h.default,{user:w,logout:y}),(0,b.jsxs)("main",{className:"ml-64 flex-1 p-8 transition-all duration-300",children:[(0,b.jsxs)("div",{className:"flex justify-between items-start mb-8",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Prescriptions"}),(0,b.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Manage patient prescriptions"})]}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsxs)("button",{onClick:()=>{$(!0),ag(null),aa("")},className:"px-4 py-2 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors font-medium flex items-center gap-2",children:[(0,b.jsx)(l.FiFileText,{}),"Templates"]}),(0,b.jsx)("button",{onClick:()=>H(!0),className:"px-6 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors font-medium",children:"+ New Prescription"})]})]}),(0,b.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:C.map(a=>(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700",children:[(0,b.jsx)("div",{className:"flex items-start justify-between mb-4",children:(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100",children:a.patient?.name}),(0,b.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:a.patient?.email})]})}),a.diagnosis&&(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Diagnosis:"}),(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.diagnosis})]}),a.medicines&&Array.isArray(a.medicines)&&a.medicines.length>0&&(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Medicines:"}),(0,b.jsx)("ul",{className:"text-sm text-gray-600 dark:text-gray-400 list-disc list-inside",children:a.medicines.map((a,c)=>(0,b.jsx)("li",{children:"string"==typeof a?a:a.name||a},c))})]}),a.instructions&&(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Instructions:"}),(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.instructions})]}),(0,b.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:(0,j.format)((0,k.parseISO)(a.prescriptionDate||a.createdAt),"MMM dd, yyyy")})]},a.id))}),0===C.length&&(0,b.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700",children:(0,b.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-lg",children:"No prescriptions yet"})}),G&&(0,b.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto",onClick:a=>{a.target===a.currentTarget&&H(!1)},children:(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-6xl my-auto flex flex-col transform transition-all animate-slideUp rounded-lg overflow-hidden",style:{minHeight:"85vh",maxHeight:"90vh"},children:[(0,b.jsxs)("div",{className:"p-4 sm:p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:[(0,b.jsxs)("div",{className:"flex justify-between items-start",children:[(0,b.jsx)("div",{className:"flex-1",children:(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2",children:(a=(R?.user?.name||w?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${a}`)}),R?.qualification&&(0,b.jsx)("p",{className:"text-base text-gray-800 dark:text-gray-200 font-medium mb-1",children:R.qualification}),R?.specialization&&(0,b.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:R.specialization}),R?.department?.name&&(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:R.department.name}),Array.isArray(R?.previousJobs)&&R.previousJobs.length>0&&(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:R.previousJobs.map(a=>"string"==typeof a?a:a.title||a.position||a).join(", ")})]}),(0,b.jsxs)("div",{className:"border-l border-gray-300 dark:border-gray-600 pl-4",children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2",children:(m=(R?.user?.name||w?.name||"নাম").replace(/^dr\.?\s*/i,""),`ডাঃ ${m}`)}),R?.qualification&&(0,b.jsx)("p",{className:"text-base text-gray-800 dark:text-gray-200 font-medium mb-1",children:R?.qualificationBn||R.qualification}),R?.specialization&&(0,b.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:R?.specializationBn||R.specialization}),R?.department?.name&&(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:R.department.name}),Array.isArray(R?.previousJobs)&&R.previousJobs.length>0&&(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:Array.isArray(R?.previousJobsBn)&&R.previousJobsBn.length>0?R.previousJobsBn.map(a=>"string"==typeof a?a:a.title||a.position||a).join(", "):R.previousJobs.map(a=>"string"==typeof a?a:a.title||a.position||a).join(", ")})]})]})}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200 mb-1",children:["Date: ",(0,j.format)(new Date,"dd MMMM, yyyy")]}),(0,b.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200",children:["Time: ",(0,j.format)(new Date,"h:mm a")]})]})]}),(0,b.jsx)("div",{className:"border-t-2 border-gray-400 dark:border-gray-500 pt-3 mt-4",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"flex-1 mr-4",children:[(0,b.jsxs)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:["Patient Email ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsx)("input",{type:"email",value:P.patientEmail,onChange:a=>Q({...P,patientEmail:a.target.value}),required:!0,className:"w-full max-w-sm px-3 py-1.5 border-2 border-gray-400 dark:border-gray-500 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm",placeholder:"patient@example.com"})]}),T&&(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200",children:["Patient: ",T.name||"N/A"]}),T.age&&(0,b.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Age: ",T.age," ",T.weight?`years | Weight: ${T.weight}`:"years"]})]}),V&&(0,b.jsx)("div",{className:"text-right",children:(0,b.jsx)("p",{className:"text-sm text-gray-500 italic",children:"Loading..."})})]})})]}),(0,b.jsx)("div",{className:"overflow-y-auto flex-1 p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800",style:{maxHeight:"calc(85vh - 250px)"},children:(0,b.jsxs)("form",{onSubmit:al,className:"space-y-4 sm:space-y-6",children:[(0,b.jsxs)("div",{className:"mb-5 p-3 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700",children:[(0,b.jsx)("label",{className:"block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2",children:"📝 Patient Problem / Notes"}),(0,b.jsx)("textarea",{value:I,onChange:a=>J(a.target.value),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm resize-none",placeholder:"Describe the patient's symptoms, complaints, or medical issues here..."}),(0,b.jsxs)("div",{className:"mt-2 flex items-center gap-2",children:[(0,b.jsxs)("button",{type:"button",onClick:ak,disabled:!I.trim()||K,className:"px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md",children:[(0,b.jsx)(l.FiZap,{className:K?"animate-spin":""}),K?"Generating...":"✨ Get AI Suggestions"]}),M&&(0,b.jsx)("button",{type:"button",onClick:()=>N(null),className:"px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300",children:"Clear"})]})]}),M&&(0,b.jsxs)("div",{className:"mb-5 p-4 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700",children:[(0,b.jsxs)("h3",{className:"font-bold text-gray-800 dark:text-gray-100 text-base mb-3 flex items-center gap-2",children:[(0,b.jsx)(l.FiZap,{className:"text-purple-600 dark:text-purple-400"}),"AI-Powered Suggestions"]}),(0,b.jsxs)("div",{className:"space-y-2.5 mb-3",children:[M.diagnosis&&(0,b.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,b.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Diagnosis:"}),(0,b.jsx)("p",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:M.diagnosis})]}),M.medicines&&(0,b.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,b.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Medicines:"}),(0,b.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(M.medicines)?(0,b.jsx)("ul",{className:"list-none space-y-1.5",children:M.medicines.map((a,c)=>(0,b.jsxs)("li",{className:"flex items-start gap-2",children:[(0,b.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[O(c+1),"."]}),(0,b.jsx)("span",{className:"flex-1",children:a})]},c))}):(0,b.jsx)("p",{className:"whitespace-pre-wrap font-mono",children:M.medicines})})]}),M.tests&&(0,b.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,b.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Tests:"}),(0,b.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(M.tests)?(0,b.jsx)("ul",{className:"list-none space-y-1.5",children:M.tests.map((a,c)=>(0,b.jsxs)("li",{className:"flex items-start gap-2",children:[(0,b.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[O(c+1),"."]}),(0,b.jsx)("span",{className:"flex-1",children:a})]},c))}):(0,b.jsx)("p",{className:"whitespace-pre-wrap",children:M.tests})})]}),M.rules&&(0,b.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,b.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Rules:"}),(0,b.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(M.rules)?(0,b.jsx)("ul",{className:"list-none space-y-1.5",children:M.rules.map((a,c)=>(0,b.jsxs)("li",{className:"flex items-start gap-2",children:[(0,b.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[O(c+1),"."]}),(0,b.jsx)("span",{className:"flex-1",children:a})]},c))}):(0,b.jsx)("p",{className:"whitespace-pre-wrap",children:M.rules})})]}),M.instructions&&(0,b.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,b.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Instructions:"}),(0,b.jsx)("pre",{className:"text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed",children:M.instructions})]})]}),(0,b.jsxs)("div",{className:"flex gap-3 pt-3 border-t-2 border-purple-300 dark:border-purple-700",children:[(0,b.jsx)("button",{type:"button",onClick:()=>N(null),className:"flex-1 px-4 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Cancel"}),(0,b.jsxs)("button",{type:"button",onClick:()=>{if(M.diagnosis&&Q(a=>({...a,diagnosis:M.diagnosis})),M.medicines){let a=Array.isArray(M.medicines)?M.medicines.map((a,b)=>`${O(b+1)}. ${a}`).join("\n"):M.medicines;Q(b=>({...b,medicines:a}))}if(M.tests){let a=Array.isArray(M.tests)?M.tests.map((a,b)=>`${O(b+1)}. ${a}`).join("\n"):M.tests;Q(b=>({...b,tests:a}))}if(M.rules){let a=Array.isArray(M.rules)?M.rules.map((a,b)=>`${O(b+1)}. ${a}`).join("\n"):M.rules;Q(b=>({...b,rules:a,advice:a}))}M.instructions&&Q(a=>({...a,instructions:M.instructions,followUp:M.instructions})),N(null)},className:"flex-1 px-4 py-2 bg-linear-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 text-sm font-semibold shadow-md",children:[(0,b.jsx)(l.FiCheck,{className:"inline mr-1"}),"Approve & Fill"]})]})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4",children:[(0,b.jsxs)("div",{className:"space-y-5",children:[(0,b.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,b.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Diagnosis",(0,b.jsx)(l.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,b.jsx)("textarea",{value:P.diagnosis,onChange:a=>Q({...P,diagnosis:a.target.value}),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter diagnosis (one per line)"})]}),(0,b.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,b.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Investigation",(0,b.jsx)(l.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,b.jsx)("textarea",{value:P.tests,onChange:a=>Q({...P,tests:a.target.value}),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter lab tests/investigations (one per line)"})]})]}),(0,b.jsxs)("div",{className:"space-y-5",children:[(0,b.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,b.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Medicine",(0,b.jsx)(l.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,b.jsx)("textarea",{value:P.medicines,onChange:a=>Q({...P,medicines:a.target.value}),rows:8,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none",placeholder:"Medicine Name - Dosage - Frequency Example: Paracetamol - 500mg - 2 times daily"})]}),(0,b.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,b.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Advice",(0,b.jsx)(l.FiPlus,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,b.jsx)("textarea",{value:P.advice||P.rules,onChange:a=>{Q({...P,advice:a.target.value,rules:a.target.value})},rows:4,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter advice/guidelines (one per line)"})]}),(0,b.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,b.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Follow up",(0,b.jsx)(l.FiPlus,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,b.jsx)("textarea",{value:P.followUp||P.instructions,onChange:a=>{Q({...P,followUp:a.target.value,instructions:a.target.value})},rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter follow-up instructions"})]})]})]}),(0,b.jsxs)("div",{className:"flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-5 border-t-2 border-gray-400 dark:border-gray-500 mt-6 sm:mt-8 shrink-0",children:[(0,b.jsxs)("button",{type:"submit",onClick:al,className:"px-5 py-2.5 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 font-bold transition-colors flex items-center gap-2 text-sm shadow-md",children:[(0,b.jsx)(l.FiCheck,{className:"text-base"}),"Save & Send"]}),(0,b.jsxs)("button",{type:"button",onClick:()=>Y(!0),className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",children:[(0,b.jsx)(l.FiEye,{className:"text-base"}),"Preview"]}),(0,b.jsxs)("button",{type:"button",onClick:()=>{af?aa(af.name):(aa(""),ag(null)),$(!0)},className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors text-sm flex items-center gap-2",children:[(0,b.jsx)(l.FiSave,{className:"text-base"}),af?"Update Template":"Save as Template"]}),(0,b.jsxs)("button",{type:"button",onClick:ap,className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",children:[(0,b.jsx)(l.FiPrinter,{className:"text-base"}),"Print"]}),(0,b.jsxs)("button",{type:"button",onClick:()=>{H(!1),Q({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),J(""),N(null),ag(null),aa("")},className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm ml-auto",children:[(0,b.jsx)(l.FiX,{className:"text-base"}),"Cancel"]})]})]})})]})}),X&&(0,b.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",onClick:a=>{a.target===a.currentTarget&&Y(!1)},children:(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",style:{maxHeight:"90vh"},children:[(0,b.jsx)("div",{className:"p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:(0,b.jsxs)("div",{className:"flex justify-between items-center",children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Prescription Preview"}),(0,b.jsx)("button",{onClick:()=>Y(!1),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:(0,b.jsx)(l.FiX,{className:"text-2xl"})})]})}),(0,b.jsx)("div",{className:"overflow-y-auto p-6 bg-white dark:bg-gray-800",style:{maxHeight:"calc(90vh - 100px)"},children:(0,b.jsxs)("div",{className:"prescription-preview",children:[(0,b.jsxs)("div",{className:"border-b-3 border-black pb-4 mb-4",children:[(0,b.jsxs)("div",{className:"flex justify-between items-start mb-3",children:[(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("div",{className:"text-2xl font-bold text-teal-600 mb-2",children:(n=(R?.user?.name||w?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${n}`)}),R?.qualification&&(0,b.jsx)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:R.qualification}),R?.specialization&&(0,b.jsx)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:R.specialization}),R?.department?.name&&(0,b.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:R.department.name}),Array.isArray(R?.previousJobs)&&R.previousJobs.length>0&&(0,b.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:R.previousJobs.map(a=>"string"==typeof a?a:a.title||a.position||a).join(", ")})]}),(0,b.jsx)("div",{className:"w-48 h-auto flex items-center justify-center",children:(0,b.jsx)("img",{src:"/logo.png",alt:"MediWise Logo",className:"max-w-full h-auto object-contain"})})]}),(0,b.jsxs)("div",{className:"border-t-2 border-black dark:border-gray-600 pt-3 mt-3 flex justify-between items-center",children:[(0,b.jsx)("div",{className:"flex-1 text-sm text-black dark:text-gray-300",children:(p=(o=T?.name||"")?`Patient: ${o}`:"",[p,T?.age?`    Age: ${T.age}`:"",T?.weight?`Weight: ${T.weight}kg`:""].filter(Boolean).join(" "))}),(0,b.jsx)("div",{className:"text-sm font-semibold text-black dark:text-gray-300",children:(r=String((q=new Date).getDate()).padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][q.getMonth()],t=q.getFullYear(),u=`${r} ${s}, ${t}`,v=(0,j.format)(q,"h:mm a"),`Date: ${u} Time: ${v}`)})]})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-10 mt-4 relative",style:{borderLeft:"3px solid #0066cc",paddingLeft:"20px",marginLeft:"20px"},children:[(0,b.jsxs)("div",{className:"space-y-4",children:[P.diagnosis&&(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Diagnosis"}),(0,b.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:P.diagnosis})]}),P.tests&&(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Investigation"}),(0,b.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:P.tests})]}),(P.followUp||P.instructions)&&(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Follow Up"}),(0,b.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:P.followUp||P.instructions})]})]}),(0,b.jsxs)("div",{className:"space-y-4",children:[P.medicines&&(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Medicine"}),(0,b.jsx)("div",{className:"text-sm font-mono whitespace-pre-wrap pl-2",children:P.medicines})]}),(P.advice||P.rules)&&(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Advice"}),(0,b.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:P.advice||P.rules})]})]})]}),(0,b.jsx)("div",{className:"mt-8 border-t-2 border-gray-400 dark:border-gray-500 pt-4 text-center",children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("div",{className:"font-bold text-lg text-teal-600 mb-2",children:"MediWise"}),(0,b.jsxs)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1 flex justify-center items-center gap-1 flex-wrap",style:{fontFamily:"Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif"},children:[(0,b.jsx)("span",{children:"চেম্বার: মেডিওয়াইজ কনসালটেশন সেন্টার"}),(0,b.jsx)("span",{children:"/"}),(0,b.jsx)("span",{children:"Chamber: MediWise Consultation Center"})]}),(0,b.jsxs)("div",{className:"text-sm font-semibold text-teal-600 mt-2 flex justify-center items-center gap-1 flex-wrap",style:{fontFamily:"Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif"},children:[(0,b.jsx)("span",{children:"সিরিয়ালের জন্য হটলাইন"}),(0,b.jsx)("span",{children:"/"}),(0,b.jsxs)("span",{children:["Hotline for Serial: ",(0,b.jsx)("strong",{children:"+8809658303665"})]})]})]})})]})}),(0,b.jsxs)("div",{className:"p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",children:[(0,b.jsxs)("button",{onClick:ap,className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",children:[(0,b.jsx)(l.FiPrinter,{}),"Print"]}),(0,b.jsx)("button",{onClick:()=>Y(!1),className:"px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",children:"Close"})]})]})}),Z&&(0,b.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",onClick:a=>{a.target===a.currentTarget&&($(!1),aa(""),ag(null))},children:(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",style:{maxHeight:"90vh"},children:[(0,b.jsx)("div",{className:"p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:(0,b.jsxs)("div",{className:"flex justify-between items-center",children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:af?"Edit Template":"Save as Template"}),(0,b.jsx)("button",{onClick:()=>{$(!1),aa(""),ag(null)},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:(0,b.jsx)(l.FiX,{className:"text-2xl"})})]})}),(0,b.jsxs)("div",{className:"overflow-y-auto p-6 bg-white dark:bg-gray-800",style:{maxHeight:"calc(90vh - 200px)"},children:[(0,b.jsxs)("div",{className:"mb-4",children:[(0,b.jsxs)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:["Template Name ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsx)("input",{type:"text",value:_,onChange:a=>aa(a.target.value),className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100",placeholder:"Enter template name (e.g., Common Cold, Fever, etc.)"})]}),(0,b.jsx)("div",{className:"mb-4",children:(0,b.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"This will save the current prescription form as a reusable template."})}),ab.length>0&&(0,b.jsxs)("div",{className:"mt-6",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"Your Templates"}),(0,b.jsx)("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:ab.map(a=>(0,b.jsxs)("div",{className:"flex items-center justify-between p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("div",{className:"font-semibold text-gray-800 dark:text-gray-100",children:a.name}),(0,b.jsx)("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:(0,j.format)((0,k.parseISO)(a.updatedAt),"MMM dd, yyyy")})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("button",{onClick:()=>{Q({patientEmail:P.patientEmail,diagnosis:a.diagnosis||"",medicines:a.medicines||"",tests:a.tests||"",rules:a.rules||"",instructions:a.instructions||"",advice:a.advice||"",followUp:a.followUp||""}),$(!1),ag(a),aa(a.name),z("Template loaded. You can edit it now.","success")},className:"px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",children:"Load"}),(0,b.jsx)("button",{onClick:()=>{ag(a),aa(a.name),Q({patientEmail:P.patientEmail,diagnosis:a.diagnosis||"",medicines:a.medicines||"",tests:a.tests||"",rules:a.rules||"",instructions:a.instructions||"",advice:a.advice||"",followUp:a.followUp||""}),$(!1),H(!0)},className:"px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600",children:"Edit"}),(0,b.jsx)("button",{onClick:()=>ao(a.id),className:"px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"Delete"})]})]},a.id))})]})]}),(0,b.jsxs)("div",{className:"p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",children:[(0,b.jsx)("button",{onClick:()=>{$(!1),aa(""),ag(null)},className:"px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",children:"Cancel"}),(0,b.jsxs)("button",{onClick:an,className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",children:[(0,b.jsx)(l.FiSave,{}),af?"Update Template":"Save Template"]})]})]})})]})]}):null}a.s(["default",()=>m])}];

//# sourceMappingURL=OneDrive_Desktop_mediwise_frontend_app_doctor_prescriptions_page_tsx_125957d7._.js.map