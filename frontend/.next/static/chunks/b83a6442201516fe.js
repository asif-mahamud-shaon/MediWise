(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39372,e=>{"use strict";var t=e.i(52972),a=e.i(66315),r=e.i(55236),s=e.i(72648),i=e.i(42388),l=e.i(51744),n=e.i(16673),o=e.i(81273),d=e.i(16639),c=e.i(17336),m=e.i(90503);function g(){let e,g,x,p,b,y,u,h,f,v,j,{user:k,loading:N,logout:w}=(0,r.useAuth)(),{showNotification:C}=(0,s.useNotification)(),$=(0,i.useRouter)(),S=(0,i.useSearchParams)(),[A,z]=(0,a.useState)([]),[E,F]=(0,a.useState)(!0),[M,T]=(0,a.useState)(!1),[D,P]=(0,a.useState)(""),[U,J]=(0,a.useState)(!1),[B,I]=(0,a.useState)(null),R=e=>{let t=["i","ii","iii","iv","v","vi","vii","viii","ix","x"];return e<=t.length?t[e-1]:String(e)},[q,W]=(0,a.useState)({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),[H,L]=(0,a.useState)(null),[O,K]=(0,a.useState)(null),[Y,X]=(0,a.useState)(!1),[G,Z]=(0,a.useState)(!1),[_,Q]=(0,a.useState)(!1),[V,ee]=(0,a.useState)(""),[et,ea]=(0,a.useState)([]),[er,es]=(0,a.useState)(!1),[ei,el]=(0,a.useState)(null);(0,a.useEffect)(()=>{N||k&&"doctor"===k.role||$.push("/login")},[k,N,$]),(0,a.useEffect)(()=>{k&&"doctor"===k.role&&(en(),eo(),eg())},[k]),(0,a.useEffect)(()=>{if(q.patientEmail&&M){let e=setTimeout(()=>{ed(q.patientEmail)},500);return()=>clearTimeout(e)}K(null)},[q.patientEmail,M]),(0,a.useEffect)(()=>{let e=S.get("patientEmail");e&&(W(t=>({...t,patientEmail:decodeURIComponent(e)})),T(!0),$.replace("/doctor/prescriptions",{scroll:!1}))},[S,$]);let en=async()=>{try{F(!0);let e=await o.default.get("/prescriptions?limit=100");z(e.data.prescriptions||[])}catch(e){console.error("Error fetching prescriptions:",e)}finally{F(!1)}},eo=async()=>{try{let e=await o.default.get("/doctors/profile/me");L(e.data.doctor)}catch(e){console.error("Error fetching doctor profile:",e)}},ed=async e=>{if(!e||!e.includes("@"))return void K(null);try{X(!0);let t=null;try{let a=await o.default.get(`/admin/users?email=${encodeURIComponent(e)}&role=patient&limit=1`);a.data.users&&a.data.users.length>0&&(t=a.data.users[0])}catch(a){try{let a=((await o.default.get("/prescriptions?limit=100")).data.prescriptions||[]).find(t=>t.patient?.email===e);a?.patient&&(t=a.patient)}catch(e){console.error("Error fetching patient from prescriptions:",e)}}if(t){let e="";if(t.dateOfBirth){let a=new Date(t.dateOfBirth),r=new Date,s=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();(i<0||0===i&&r.getDate()<a.getDate())&&s--,e=`${s} years`}K({...t,age:e})}else K(null)}catch(e){console.error("Error fetching patient info:",e),K(null)}finally{X(!1)}},ec=async()=>{if(!D.trim())return void C("Please describe the patient's problem first","error");try{J(!0);let e=await o.default.post("/prescriptions/ai-suggestions",{problem:D.trim()});I(e.data.suggestions)}catch(e){console.error("Error fetching AI suggestions:",e),C(e.response?.data?.message||"Failed to generate AI suggestions","error")}finally{J(!1)}},em=async e=>{e&&e.preventDefault();try{let e=q.medicines.split("\n").map(e=>e.trim()).filter(e=>e.length>0).map(e=>{let t=e.split("-").map(e=>e.trim());return{name:t[0]||e,dosage:t[1]||"",frequency:t[2]||""}}),t=q.tests.split("\n").map(e=>e.trim()).filter(e=>e.length>0).map(e=>({name:e,description:""})),a=q.rules.split("\n").map(e=>e.trim()).filter(e=>e.length>0).map(e=>({title:e,description:""})),r=[q.instructions,q.followUp&&`Follow-up:
${q.followUp}`].filter(Boolean).join("\n\n"),s=a.length>0?a:q.advice?q.advice.split("\n").filter(e=>e.trim()).map(e=>({title:e.trim(),description:""})):[];await o.default.post("/prescriptions",{patientEmail:q.patientEmail,diagnosis:q.diagnosis,medicines:e,tests:t,rules:s,instructions:r||q.instructions}),C("Prescription created successfully","success"),T(!1),W({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),P(""),I(null),el(null),ee(""),en()}catch(e){C(e.response?.data?.message||"Failed to create prescription","error")}},eg=async()=>{try{es(!0);let e=await o.default.get("/templates");ea(e.data.templates||[])}catch(e){console.error("Error fetching templates:",e)}finally{es(!1)}},ex=async()=>{try{if(!V.trim())return void C("Please enter a template name","error");ei?(await o.default.put(`/templates/${ei.id}`,{name:V,diagnosis:q.diagnosis,medicines:q.medicines,tests:q.tests,rules:q.rules,instructions:q.instructions,advice:q.advice,followUp:q.followUp}),C("Template updated successfully","success")):(await o.default.post("/templates",{name:V,diagnosis:q.diagnosis,medicines:q.medicines,tests:q.tests,rules:q.rules,instructions:q.instructions,advice:q.advice,followUp:q.followUp}),C("Template saved successfully","success")),Q(!1),ee(""),el(null),eg()}catch(e){C(e.response?.data?.message||"Failed to save template","error")}},ep=async e=>{if(confirm("Are you sure you want to delete this template?"))try{await o.default.delete(`/templates/${e}`),C("Template deleted successfully","success"),eg()}catch(e){C(e.response?.data?.message||"Failed to delete template","error")}},eb=()=>{let e,t,a,r,s,i,l,n,o,c=window.open("","_blank");if(!c)return;let m=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Prescription - ${O?.name||"Patient"}</title>
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
                  <div class="doctor-name">${(e=(H?.user?.name||k?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${e}`)}</div>
                  ${H?.qualification?`<div class="doctor-details">${H.qualification}</div>`:""}
                  ${H?.specialization?`<div class="doctor-details">${H.specialization}</div>`:""}
                  ${H?.department?.name?`<div class="doctor-details">${H.department.name}</div>`:""}
                  ${Array.isArray(H?.previousJobs)&&H.previousJobs.length>0?`
                    <div class="doctor-details">${H.previousJobs.map(e=>"string"==typeof e?e:e.title||e.position||e).join(", ")}</div>
                  `:""}
                </div>
                <div class="logo-container">
                  <img src="/logo.png" alt="MediWise Logo" class="logo-image" onerror="this.style.display='none';" />
                </div>
              </div>
              <div style="border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                  ${(a=(t=O?.name||"")?`Patient: ${t}`:"",[a,O?.age?`    Age: ${O.age}`:"",O?.weight?`Weight: ${O.weight}kg`:""].filter(Boolean).join(" "))}
                </div>
                <div class="date-time">
                  ${(s=String((r=new Date).getDate()).padStart(2,"0"),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()],l=r.getFullYear(),n=`${s} ${i}, ${l}`,o=(0,d.format)(r,"h:mm a"),`Date: ${n} Time: ${o}`)}
                </div>
              </div>
            </div>
            

            <!-- Two Column Layout - Same as Form -->
            <div class="two-column-layout">
              <!-- Left Column -->
              <div class="left-column">
                ${q.diagnosis?`
                <div class="section">
                  <div class="section-title">Diagnosis</div>
                  <div class="section-content">${q.diagnosis}</div>
                </div>
                `:""}
                
                ${q.tests?`
                <div class="section">
                  <div class="section-title">Investigation</div>
                  <div class="section-content">${q.tests}</div>
                </div>
                `:""}

                ${q.followUp||q.instructions?`
                <div class="section">
                  <div class="section-title">Follow up</div>
                  <div class="section-content">${q.followUp||q.instructions}</div>
                </div>
                `:""}
              </div>

              <!-- Right Column -->
              <div class="right-column">
                ${q.medicines?`
                <div class="section">
                  <div class="section-title">Medicine</div>
                  <div class="section-content medicines-content">${q.medicines}</div>
                </div>
                `:""}

                ${q.advice||q.rules?`
                <div class="section">
                  <div class="section-title">Advice</div>
                  <div class="section-content">${q.advice||q.rules}</div>
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
    `;c.document.write(m),c.document.close(),c.focus(),setTimeout(()=>{c.print()},250)};return N||E?(0,t.jsx)(l.default,{}):k&&"doctor"===k.role?(0,t.jsxs)("div",{className:"flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors",children:[(0,t.jsx)(n.default,{user:k,logout:w}),(0,t.jsxs)("main",{className:"ml-64 flex-1 p-8 transition-all duration-300",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Prescriptions"}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Manage patient prescriptions"})]}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)("button",{onClick:()=>{Q(!0),el(null),ee("")},className:"px-4 py-2 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors font-medium flex items-center gap-2",children:[(0,t.jsx)(m.FiFileText,{}),"Templates"]}),(0,t.jsx)("button",{onClick:()=>T(!0),className:"px-6 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors font-medium",children:"+ New Prescription"})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:A.map(e=>(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700",children:[(0,t.jsx)("div",{className:"flex items-start justify-between mb-4",children:(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100",children:e.patient?.name}),(0,t.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:e.patient?.email})]})}),e.diagnosis&&(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Diagnosis:"}),(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.diagnosis})]}),e.medicines&&Array.isArray(e.medicines)&&e.medicines.length>0&&(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Medicines:"}),(0,t.jsx)("ul",{className:"text-sm text-gray-600 dark:text-gray-400 list-disc list-inside",children:e.medicines.map((e,a)=>(0,t.jsx)("li",{children:"string"==typeof e?e:e.name||e},a))})]}),e.instructions&&(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Instructions:"}),(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.instructions})]}),(0,t.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:(0,d.format)((0,c.parseISO)(e.prescriptionDate||e.createdAt),"MMM dd, yyyy")})]},e.id))}),0===A.length&&(0,t.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700",children:(0,t.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-lg",children:"No prescriptions yet"})}),M&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto",onClick:e=>{e.target===e.currentTarget&&T(!1)},children:(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-6xl my-auto flex flex-col transform transition-all animate-slideUp rounded-lg overflow-hidden",style:{minHeight:"85vh",maxHeight:"90vh"},children:[(0,t.jsxs)("div",{className:"p-4 sm:p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start",children:[(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2",children:(e=(H?.user?.name||k?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${e}`)}),H?.qualification&&(0,t.jsx)("p",{className:"text-base text-gray-800 dark:text-gray-200 font-medium mb-1",children:H.qualification}),H?.specialization&&(0,t.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:H.specialization}),H?.department?.name&&(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:H.department.name}),Array.isArray(H?.previousJobs)&&H.previousJobs.length>0&&(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:H.previousJobs.map(e=>"string"==typeof e?e:e.title||e.position||e).join(", ")})]}),(0,t.jsxs)("div",{className:"border-l border-gray-300 dark:border-gray-600 pl-4",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2",children:(g=(H?.user?.name||k?.name||"নাম").replace(/^dr\.?\s*/i,""),`ডাঃ ${g}`)}),H?.qualification&&(0,t.jsx)("p",{className:"text-base text-gray-800 dark:text-gray-200 font-medium mb-1",children:H?.qualificationBn||H.qualification}),H?.specialization&&(0,t.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:H?.specializationBn||H.specialization}),H?.department?.name&&(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:H.department.name}),Array.isArray(H?.previousJobs)&&H.previousJobs.length>0&&(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:Array.isArray(H?.previousJobsBn)&&H.previousJobsBn.length>0?H.previousJobsBn.map(e=>"string"==typeof e?e:e.title||e.position||e).join(", "):H.previousJobs.map(e=>"string"==typeof e?e:e.title||e.position||e).join(", ")})]})]})}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200 mb-1",children:["Date: ",(0,d.format)(new Date,"dd MMMM, yyyy")]}),(0,t.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200",children:["Time: ",(0,d.format)(new Date,"h:mm a")]})]})]}),(0,t.jsx)("div",{className:"border-t-2 border-gray-400 dark:border-gray-500 pt-3 mt-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex-1 mr-4",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:["Patient Email ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"email",value:q.patientEmail,onChange:e=>W({...q,patientEmail:e.target.value}),required:!0,className:"w-full max-w-sm px-3 py-1.5 border-2 border-gray-400 dark:border-gray-500 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm",placeholder:"patient@example.com"})]}),O&&(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-base font-semibold text-gray-800 dark:text-gray-200",children:["Patient: ",O.name||"N/A"]}),O.age&&(0,t.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Age: ",O.age," ",O.weight?`years | Weight: ${O.weight}`:"years"]})]}),Y&&(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("p",{className:"text-sm text-gray-500 italic",children:"Loading..."})})]})})]}),(0,t.jsx)("div",{className:"overflow-y-auto flex-1 p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800",style:{maxHeight:"calc(85vh - 250px)"},children:(0,t.jsxs)("form",{onSubmit:em,className:"space-y-4 sm:space-y-6",children:[(0,t.jsxs)("div",{className:"mb-5 p-3 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700",children:[(0,t.jsx)("label",{className:"block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2",children:"📝 Patient Problem / Notes"}),(0,t.jsx)("textarea",{value:D,onChange:e=>P(e.target.value),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm resize-none",placeholder:"Describe the patient's symptoms, complaints, or medical issues here..."}),(0,t.jsxs)("div",{className:"mt-2 flex items-center gap-2",children:[(0,t.jsxs)("button",{type:"button",onClick:ec,disabled:!D.trim()||U,className:"px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md",children:[(0,t.jsx)(m.FiZap,{className:U?"animate-spin":""}),U?"Generating...":"✨ Get AI Suggestions"]}),B&&(0,t.jsx)("button",{type:"button",onClick:()=>I(null),className:"px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300",children:"Clear"})]})]}),B&&(0,t.jsxs)("div",{className:"mb-5 p-4 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700",children:[(0,t.jsxs)("h3",{className:"font-bold text-gray-800 dark:text-gray-100 text-base mb-3 flex items-center gap-2",children:[(0,t.jsx)(m.FiZap,{className:"text-purple-600 dark:text-purple-400"}),"AI-Powered Suggestions"]}),(0,t.jsxs)("div",{className:"space-y-2.5 mb-3",children:[B.diagnosis&&(0,t.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,t.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Diagnosis:"}),(0,t.jsx)("p",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:B.diagnosis})]}),B.medicines&&(0,t.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,t.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Medicines:"}),(0,t.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(B.medicines)?(0,t.jsx)("ul",{className:"list-none space-y-1.5",children:B.medicines.map((e,a)=>(0,t.jsxs)("li",{className:"flex items-start gap-2",children:[(0,t.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[R(a+1),"."]}),(0,t.jsx)("span",{className:"flex-1",children:e})]},a))}):(0,t.jsx)("p",{className:"whitespace-pre-wrap font-mono",children:B.medicines})})]}),B.tests&&(0,t.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,t.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Tests:"}),(0,t.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(B.tests)?(0,t.jsx)("ul",{className:"list-none space-y-1.5",children:B.tests.map((e,a)=>(0,t.jsxs)("li",{className:"flex items-start gap-2",children:[(0,t.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[R(a+1),"."]}),(0,t.jsx)("span",{className:"flex-1",children:e})]},a))}):(0,t.jsx)("p",{className:"whitespace-pre-wrap",children:B.tests})})]}),B.rules&&(0,t.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,t.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Rules:"}),(0,t.jsx)("div",{className:"text-xs text-gray-700 dark:text-gray-300 leading-relaxed",children:Array.isArray(B.rules)?(0,t.jsx)("ul",{className:"list-none space-y-1.5",children:B.rules.map((e,a)=>(0,t.jsxs)("li",{className:"flex items-start gap-2",children:[(0,t.jsxs)("span",{className:"font-semibold text-purple-600 dark:text-purple-400 shrink-0",children:[R(a+1),"."]}),(0,t.jsx)("span",{className:"flex-1",children:e})]},a))}):(0,t.jsx)("p",{className:"whitespace-pre-wrap",children:B.rules})})]}),B.instructions&&(0,t.jsxs)("div",{className:"p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",children:[(0,t.jsx)("p",{className:"text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",children:"Instructions:"}),(0,t.jsx)("pre",{className:"text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed",children:B.instructions})]})]}),(0,t.jsxs)("div",{className:"flex gap-3 pt-3 border-t-2 border-purple-300 dark:border-purple-700",children:[(0,t.jsx)("button",{type:"button",onClick:()=>I(null),className:"flex-1 px-4 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Cancel"}),(0,t.jsxs)("button",{type:"button",onClick:()=>{if(B.diagnosis&&W(e=>({...e,diagnosis:B.diagnosis})),B.medicines){let e=Array.isArray(B.medicines)?B.medicines.map((e,t)=>`${R(t+1)}. ${e}`).join("\n"):B.medicines;W(t=>({...t,medicines:e}))}if(B.tests){let e=Array.isArray(B.tests)?B.tests.map((e,t)=>`${R(t+1)}. ${e}`).join("\n"):B.tests;W(t=>({...t,tests:e}))}if(B.rules){let e=Array.isArray(B.rules)?B.rules.map((e,t)=>`${R(t+1)}. ${e}`).join("\n"):B.rules;W(t=>({...t,rules:e,advice:e}))}B.instructions&&W(e=>({...e,instructions:B.instructions,followUp:B.instructions})),I(null)},className:"flex-1 px-4 py-2 bg-linear-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 text-sm font-semibold shadow-md",children:[(0,t.jsx)(m.FiCheck,{className:"inline mr-1"}),"Approve & Fill"]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4",children:[(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Diagnosis",(0,t.jsx)(m.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,t.jsx)("textarea",{value:q.diagnosis,onChange:e=>W({...q,diagnosis:e.target.value}),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter diagnosis (one per line)"})]}),(0,t.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Investigation",(0,t.jsx)(m.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,t.jsx)("textarea",{value:q.tests,onChange:e=>W({...q,tests:e.target.value}),rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter lab tests/investigations (one per line)"})]})]}),(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Medicine",(0,t.jsx)(m.FiEdit2,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,t.jsx)("textarea",{value:q.medicines,onChange:e=>W({...q,medicines:e.target.value}),rows:8,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none",placeholder:"Medicine Name - Dosage - Frequency Example: Paracetamol - 500mg - 2 times daily"})]}),(0,t.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Advice",(0,t.jsx)(m.FiPlus,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,t.jsx)("textarea",{value:q.advice||q.rules,onChange:e=>{W({...q,advice:e.target.value,rules:e.target.value})},rows:4,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter advice/guidelines (one per line)"})]}),(0,t.jsxs)("div",{className:"border-b-2 border-gray-400 dark:border-gray-500 pb-3",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",children:["Follow up",(0,t.jsx)(m.FiPlus,{className:"text-sm text-gray-500 cursor-pointer hover:text-teal-600"})]}),(0,t.jsx)("textarea",{value:q.followUp||q.instructions,onChange:e=>{W({...q,followUp:e.target.value,instructions:e.target.value})},rows:3,className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",placeholder:"Enter follow-up instructions"})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-5 border-t-2 border-gray-400 dark:border-gray-500 mt-6 sm:mt-8 shrink-0",children:[(0,t.jsxs)("button",{type:"submit",onClick:em,className:"px-5 py-2.5 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 font-bold transition-colors flex items-center gap-2 text-sm shadow-md",children:[(0,t.jsx)(m.FiCheck,{className:"text-base"}),"Save & Send"]}),(0,t.jsxs)("button",{type:"button",onClick:()=>Z(!0),className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",children:[(0,t.jsx)(m.FiEye,{className:"text-base"}),"Preview"]}),(0,t.jsxs)("button",{type:"button",onClick:()=>{ei?ee(ei.name):(ee(""),el(null)),Q(!0)},className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors text-sm flex items-center gap-2",children:[(0,t.jsx)(m.FiSave,{className:"text-base"}),ei?"Update Template":"Save as Template"]}),(0,t.jsxs)("button",{type:"button",onClick:eb,className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",children:[(0,t.jsx)(m.FiPrinter,{className:"text-base"}),"Print"]}),(0,t.jsxs)("button",{type:"button",onClick:()=>{T(!1),W({patientEmail:"",diagnosis:"",medicines:"",tests:"",rules:"",instructions:"",advice:"",followUp:""}),P(""),I(null),el(null),ee("")},className:"px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm ml-auto",children:[(0,t.jsx)(m.FiX,{className:"text-base"}),"Cancel"]})]})]})})]})}),G&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",onClick:e=>{e.target===e.currentTarget&&Z(!1)},children:(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",style:{maxHeight:"90vh"},children:[(0,t.jsx)("div",{className:"p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Prescription Preview"}),(0,t.jsx)("button",{onClick:()=>Z(!1),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:(0,t.jsx)(m.FiX,{className:"text-2xl"})})]})}),(0,t.jsx)("div",{className:"overflow-y-auto p-6 bg-white dark:bg-gray-800",style:{maxHeight:"calc(90vh - 100px)"},children:(0,t.jsxs)("div",{className:"prescription-preview",children:[(0,t.jsxs)("div",{className:"border-b-3 border-black pb-4 mb-4",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-3",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-teal-600 mb-2",children:(x=(H?.user?.name||k?.name||"Name").replace(/^dr\.?\s*/i,""),`Dr. ${x}`)}),H?.qualification&&(0,t.jsx)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:H.qualification}),H?.specialization&&(0,t.jsx)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1",children:H.specialization}),H?.department?.name&&(0,t.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:H.department.name}),Array.isArray(H?.previousJobs)&&H.previousJobs.length>0&&(0,t.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:H.previousJobs.map(e=>"string"==typeof e?e:e.title||e.position||e).join(", ")})]}),(0,t.jsx)("div",{className:"w-48 h-auto flex items-center justify-center",children:(0,t.jsx)("img",{src:"/logo.png",alt:"MediWise Logo",className:"max-w-full h-auto object-contain"})})]}),(0,t.jsxs)("div",{className:"border-t-2 border-black dark:border-gray-600 pt-3 mt-3 flex justify-between items-center",children:[(0,t.jsx)("div",{className:"flex-1 text-sm text-black dark:text-gray-300",children:(b=(p=O?.name||"")?`Patient: ${p}`:"",[b,O?.age?`    Age: ${O.age}`:"",O?.weight?`Weight: ${O.weight}kg`:""].filter(Boolean).join(" "))}),(0,t.jsx)("div",{className:"text-sm font-semibold text-black dark:text-gray-300",children:(u=String((y=new Date).getDate()).padStart(2,"0"),h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][y.getMonth()],f=y.getFullYear(),v=`${u} ${h}, ${f}`,j=(0,d.format)(y,"h:mm a"),`Date: ${v} Time: ${j}`)})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-10 mt-4 relative",style:{borderLeft:"3px solid #0066cc",paddingLeft:"20px",marginLeft:"20px"},children:[(0,t.jsxs)("div",{className:"space-y-4",children:[q.diagnosis&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Diagnosis"}),(0,t.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:q.diagnosis})]}),q.tests&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Investigation"}),(0,t.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:q.tests})]}),(q.followUp||q.instructions)&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Follow Up"}),(0,t.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:q.followUp||q.instructions})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[q.medicines&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Medicine"}),(0,t.jsx)("div",{className:"text-sm font-mono whitespace-pre-wrap pl-2",children:q.medicines})]}),(q.advice||q.rules)&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",children:"Advice"}),(0,t.jsx)("div",{className:"text-sm whitespace-pre-wrap pl-2",children:q.advice||q.rules})]})]})]}),(0,t.jsx)("div",{className:"mt-8 border-t-2 border-gray-400 dark:border-gray-500 pt-4 text-center",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"font-bold text-lg text-teal-600 mb-2",children:"MediWise"}),(0,t.jsxs)("div",{className:"text-sm text-gray-700 dark:text-gray-300 mb-1 flex justify-center items-center gap-1 flex-wrap",style:{fontFamily:"Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif"},children:[(0,t.jsx)("span",{children:"চেম্বার: মেডিওয়াইজ কনসালটেশন সেন্টার"}),(0,t.jsx)("span",{children:"/"}),(0,t.jsx)("span",{children:"Chamber: MediWise Consultation Center"})]}),(0,t.jsxs)("div",{className:"text-sm font-semibold text-teal-600 mt-2 flex justify-center items-center gap-1 flex-wrap",style:{fontFamily:"Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif"},children:[(0,t.jsx)("span",{children:"সিরিয়ালের জন্য হটলাইন"}),(0,t.jsx)("span",{children:"/"}),(0,t.jsxs)("span",{children:["Hotline for Serial: ",(0,t.jsx)("strong",{children:"+8809658303665"})]})]})]})})]})}),(0,t.jsxs)("div",{className:"p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",children:[(0,t.jsxs)("button",{onClick:eb,className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",children:[(0,t.jsx)(m.FiPrinter,{}),"Print"]}),(0,t.jsx)("button",{onClick:()=>Z(!1),className:"px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",children:"Close"})]})]})}),_&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",onClick:e=>{e.target===e.currentTarget&&(Q(!1),ee(""),el(null))},children:(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",style:{maxHeight:"90vh"},children:[(0,t.jsx)("div",{className:"p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:ei?"Edit Template":"Save as Template"}),(0,t.jsx)("button",{onClick:()=>{Q(!1),ee(""),el(null)},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:(0,t.jsx)(m.FiX,{className:"text-2xl"})})]})}),(0,t.jsxs)("div",{className:"overflow-y-auto p-6 bg-white dark:bg-gray-800",style:{maxHeight:"calc(90vh - 200px)"},children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:["Template Name ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",value:V,onChange:e=>ee(e.target.value),className:"w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100",placeholder:"Enter template name (e.g., Common Cold, Fever, etc.)"})]}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"This will save the current prescription form as a reusable template."})}),et.length>0&&(0,t.jsxs)("div",{className:"mt-6",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"Your Templates"}),(0,t.jsx)("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:et.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"font-semibold text-gray-800 dark:text-gray-100",children:e.name}),(0,t.jsx)("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:(0,d.format)((0,c.parseISO)(e.updatedAt),"MMM dd, yyyy")})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("button",{onClick:()=>{W({patientEmail:q.patientEmail,diagnosis:e.diagnosis||"",medicines:e.medicines||"",tests:e.tests||"",rules:e.rules||"",instructions:e.instructions||"",advice:e.advice||"",followUp:e.followUp||""}),Q(!1),el(e),ee(e.name),C("Template loaded. You can edit it now.","success")},className:"px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",children:"Load"}),(0,t.jsx)("button",{onClick:()=>{el(e),ee(e.name),W({patientEmail:q.patientEmail,diagnosis:e.diagnosis||"",medicines:e.medicines||"",tests:e.tests||"",rules:e.rules||"",instructions:e.instructions||"",advice:e.advice||"",followUp:e.followUp||""}),Q(!1),T(!0)},className:"px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600",children:"Edit"}),(0,t.jsx)("button",{onClick:()=>ep(e.id),className:"px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"Delete"})]})]},e.id))})]})]}),(0,t.jsxs)("div",{className:"p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",children:[(0,t.jsx)("button",{onClick:()=>{Q(!1),ee(""),el(null)},className:"px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",children:"Cancel"}),(0,t.jsxs)("button",{onClick:ex,className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",children:[(0,t.jsx)(m.FiSave,{}),ei?"Update Template":"Save Template"]})]})]})})]})]}):null}e.s(["default",()=>g])}]);