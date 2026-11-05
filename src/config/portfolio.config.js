/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION LAYER (SINGLE SOURCE OF TRUTH)
 * ============================================================================
 * 
 * Want to use this portfolio for your own CV or projects?
 * Simply edit this file! Everything from personal info, skills, experience,
 * project case studies, education, and links is dynamically rendered.
 * 
 * @author Munardi <dira20590@gmail.com>
 * @license MIT
 */

export const portfolioConfig = {
  "personal": {
    "name": "Munardi",
    "surnameDot": ".",
    "rolePrimary": "Software Engineer",
    "roleBadge": "Core Banking & Pipelines",
    "status": {
      "en": "CORE BANKING & BACKEND ARCHITECT • AVAILABLE",
      "id": "ARSITEK CORE BANKING & BACKEND • TERSEDIA"
    },
    "pitch": {
      "en": "Over <b>7+ years</b> architecting mission-critical financial systems across <b>5 leading institutions</b>. Specializing in Golang, high-throughput data pipelines, Clean Architecture, and zero-downtime database optimization.",
      "id": "Lebih dari <b>7+ tahun</b> merekayasa sistem finansial berskala kritikal di <b>5 institusi keuangan terkemuka</b>. Spesialisasi dalam Golang, pipeline data throughput tinggi, Clean Architecture, dan optimasi database tanpa downtime."
    },
    "location": {
      "en": "JAKARTA, ID • REMOTE / HYBRID READY",
      "id": "JAKARTA, ID • SIAP KERJA REMOTE / HYBRID"
    },
    "contact": {
      "whatsapp": "+62 896-6524-1717",
      "whatsappUrlEn": "https://wa.me/6289665241717?text=Hi%20Ards%2C%20I'm%20interested%20in%20discussing%20a%20project%20or%20recruitment%20opportunity%20with%20you!",
      "whatsappUrlId": "https://wa.me/6289665241717?text=Halo%20Ards%2C%20saya%20tertarik%20untuk%20diskusi%20masalah%20project%20atau%20rekrutmen%20dengan%20Anda!",
      "email": "dira20590@gmail.com",
      "linkedin": "https://linkedin.com/in/munardi",
      "linkedinHandle": "in/munardi",
      "github": "https://github.com/Munardi15"
    },
    "cvDownloads": [
      {
        "label": "Software Engineer (PDF)",
        "file": "./MUNARDI-CV_SoftwareEngineer.pdf",
        "primary": true,
        "type": "pdf"
      },
      {
        "label": "Backend Focus",
        "file": "./MUNARDI-CV_BackendEngineer.pdf",
        "primary": false,
        "type": "pdf"
      },
      {
        "label": "Full Stack",
        "file": "./MUNARDI-CV_FullStackDeveloper.pdf",
        "primary": false,
        "type": "pdf"
      },
      {
        "label": "DOCX",
        "file": "./MUNARDI-CV_SoftwareEngineer.docx",
        "primary": false,
        "type": "docx"
      }
    ]
  },
  "navigation": [
    {
      "id": "about",
      "href": "#about",
      "label": {
        "en": "About",
        "id": "Tentang"
      }
    },
    {
      "id": "skill",
      "href": "#skill",
      "label": {
        "en": "Skills",
        "id": "Keahlian"
      }
    },
    {
      "id": "experience",
      "href": "#experience",
      "label": {
        "en": "Experience",
        "id": "Pengalaman"
      }
    },
    {
      "id": "education",
      "href": "#education",
      "label": {
        "en": "Education",
        "id": "Pendidikan"
      }
    },
    {
      "id": "contact",
      "href": "#contact",
      "label": {
        "en": "Contact",
        "id": "Kontak"
      }
    }
  ],
  "about": {
    "eyebrow": {
      "en": "About",
      "id": "Tentang"
    },
    "title": {
      "en": "Engineering Philosophy.",
      "id": "Filosofi Rekayasa."
    },
    "description": {
      "en": "Solving core infrastructural problems with precision, rapid technical adaptability, and uncompromising accountability.",
      "id": "Memecahkan masalah infrastruktur inti dengan presisi teknis, adaptasi kilat, dan akuntabilitas penuh."
    },
    "narrative": {
      "en": "As a <b>Software Engineer</b>, my defining edge goes beyond writing code — <span class=\"highlight\">I adapt rapidly.</span> Proven across 5 premier financial institutions, I excel at stepping into complex, high-stakes environments and executing mission-critical systems across <b>Golang, Python, PHP, Node.js, and Java</b>.<br><br>My greatest asset isn't loyalty to a single stack — it's the speed and precision with which I master new architectures and ship production-grade solutions in any ecosystem. From modernizing rigid legacy SSIS pipelines into high-throughput Go microservices to untangling deep database bottlenecks, my focus is always engineering robust answers to fundamental problems, not just pushing syntax.",
      "id": "Sebagai seorang <b>Software Engineer</b>, kekuatan utama saya bukan hanya menulis kode — <span class=\"highlight\">saya cepat beradaptasi.</span> Teruji di 5 institusi finansial terkemuka, saya terbiasa masuk ke ekosistem kompleks dan langsung mengeksekusi sistem kritikal melintasi berbagai teknologi: <b>Golang, Python, PHP, Node.js, hingga Java</b>.<br><br>Keunggulan terbesar saya bukan keterikatan pada satu framework, melainkan kecepatan dan ketepatan dalam menguasai arsitektur baru serta menghadirkan solusi siap-produksi di lingkungan mana pun. Mulai dari merombak pipeline data warisan (legacy SSIS) menjadi arsitektur cloud Go berkecepatan tinggi hingga mengurai bottleneck database level dalam, fokus saya adalah menyelesaikan akar permasalahan sistem secara tuntas, bukan sekadar mengetik baris sintaks."
    },
    "badges": [
      "⚡ Rapid Technical Adaptability",
      "🛡️ High Transaction Volume",
      "⚙️ Clean Architecture",
      "📦 Cloud & Containers"
    ]
  },
  "stats": [
    {
      "value": "05+",
      "label": {
        "en": "Financial Institutions",
        "id": "Institusi Finansial"
      }
    },
    {
      "value": "13+",
      "label": {
        "en": "Schedulers & Pipelines at BRI",
        "id": "Pipeline & Scheduler di BRI"
      }
    },
    {
      "value": "3.71",
      "label": {
        "en": "GPA Cum Laude (Mercu Buana)",
        "id": "IPK Cum Laude (Mercu Buana)"
      }
    },
    {
      "value": "100%",
      "label": {
        "en": "Production Reliability",
        "id": "Keandalan Produksi"
      }
    }
  ],
  "skills": [
    {
      "title": {
        "en": "Backend & Frontend",
        "id": "Backend & Frontend"
      },
      "tags": [
        "Golang",
        "Python",
        "Java",
        "PHP",
        "Node.js",
        "React.js",
        "JavaScript",
        "HTML/CSS"
      ]
    },
    {
      "title": {
        "en": "Frameworks & Libraries",
        "id": "Kerangka Kerja & Pustaka"
      },
      "tags": [
        "Fiber",
        "GORM",
        "Laravel",
        "Spring Boot",
        "Express.js"
      ]
    },
    {
      "title": {
        "en": "Database Engineering",
        "id": "Teknik Basis Data"
      },
      "tags": [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Indexing & SPs"
      ]
    },
    {
      "title": {
        "en": "DevOps & Infra",
        "id": "DevOps & Infrastruktur"
      },
      "tags": [
        "Docker",
        "Kubernetes",
        "Helm",
        "Bamboo CI/CD",
        "Apache"
      ]
    },
    {
      "title": {
        "en": "Integration & Security",
        "id": "Integrasi & Keamanan"
      },
      "tags": [
        "FTP / SFTP",
        "MinIO S3",
        "AES / GPG",
        "SMTP Alerts"
      ]
    }
  ],
  "experiences": [
    {
      "id": "job-01",
      "node": "01",
      "company": "Bank Rakyat Indonesia (BRI) — Vendor",
      "role": {
        "en": "Back End Engineer",
        "id": "Insinyur Back End"
      },
      "period": {
        "en": "Oct 2025 – Now",
        "id": "Okt 2025 – Sekarang"
      },
      "drawerTitle": {
        "en": "Core Schedulers & Banking Pipelines",
        "id": "Scheduler Core & Pipeline Perbankan"
      },
      "projectCount": 13,
      "projects": [
        {
          "codeName": "sch-parse-file-merah-putih",
          "tags": [
            "Golang",
            "MinIO",
            "SQL Server",
            "Docker"
          ],
          "problem": {
            "en": "The legacy SSIS DTSX system was rigid, lacked containerization support, and suffered extreme latency in parsing large transaction files.",
            "id": "Sistem legacy SSIS DTSX kaku, tidak mendukung kontainerisasi, dan mengalami latensi ekstrem saat memproses file transaksi berukuran besar."
          },
          "flow": [
            "Read Log",
            "Download MinIO",
            "Extract ZIP",
            "Validate TXT",
            "DB Bulk Insert",
            "Flag Done"
          ],
          "role": {
            "en": "Migrated legacy SSIS into modern Golang Clean Architecture. Engineered testing sub-modules <b>datasourcedistributor</b> (source distribution) and <b>compare_project</b> (output integrity validation).",
            "id": "Migrasi logika SSIS lama ke service Golang modern dengan Clean Architecture. Mengembangkan sub-modul testing <b>datasourcedistributor</b> dan <b>compare_project</b> (validasi output vs sistem lama)."
          }
        },
        {
          "codeName": "sch-log-activity-briva",
          "tags": [
            "Golang",
            "Fiber",
            "SQL Server"
          ],
          "problem": {
            "en": "Lack of centralized monitoring for job execution statuses across scattered scheduler applications.",
            "id": "Ketiadaan monitoring terpusat untuk status eksekusi job di seluruh aplikasi scheduler yang tersebar."
          },
          "flow": [
            "Fetch Pending",
            "Evaluate Prereq",
            "In-Memory Cache",
            "Distribute via API",
            "Optimistic Update"
          ],
          "role": {
            "en": "Engineered a centralized REST API service tracking real-time execution states across 7+ BRIVA schedulers.",
            "id": "Membangun service REST API terpusat untuk melacak status eksekusi dari 7+ aplikasi scheduler BRIVA."
          }
        },
        {
          "codeName": "sch-email-briva",
          "tags": [
            "Golang",
            "SMTP",
            "MinIO"
          ],
          "problem": {
            "en": "Need for instant alerting and daily executive reporting regarding anomalies and reconciliation statuses.",
            "id": "Dibutuhkan notifikasi instan dan laporan harian terkait anomali serta status rekonsiliasi data BRIVA."
          },
          "flow": [
            "Fetch Params",
            "Match & Mark",
            "Build MinIO Attachment",
            "Broadcast SMTP",
            "Update Status"
          ],
          "role": {
            "en": "Built from scratch to handle automated email alerting and real-time operational reporting.",
            "id": "Membangun dari awal service alert email otomatis dan pelaporan operasional real-time."
          }
        },
        {
          "codeName": "sch-data-copy-briva",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Need for high-speed archiving of BRIVA datasets from source to target DB without locking operational queries.",
            "id": "Kebutuhan duplikasi dan arsip dataset BRIVA yang aman dari sumber ke target tanpa membebani query transaksi harian."
          },
          "flow": [
            "Fetch Activity",
            "Stream Source Data",
            "Batch Insert Destination",
            "Update Status"
          ],
          "role": {
            "en": "Engineered automated data migration service ensuring zero transactional lock contention.",
            "id": "Membangun dari awal service streaming data untuk efisiensi migrasi data dan automasi backup."
          }
        },
        {
          "codeName": "sch-data-update-briva",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Need for synchronization and mass bulk updates on BRIVA transaction states across environments.",
            "id": "Kebutuhan sinkronisasi dan bulk update massal data state transaksi BRIVA antar environment."
          },
          "flow": [
            "Fetch Params",
            "Compute Delta",
            "Batch Update Execution",
            "Update Status"
          ],
          "role": {
            "en": "Built dedicated scheduler for synchronizing daily transaction state integrity.",
            "id": "Membangun scheduler terdedikasi untuk sinkronisasi state data transaksi harian secara konsisten."
          }
        },
        {
          "codeName": "sch-generate-file-briva",
          "tags": [
            "Golang",
            "MinIO",
            "SQL Server"
          ],
          "problem": {
            "en": "Manual generation of reconciliation flat files for external partners was error-prone and slow.",
            "id": "Pembuatan file mutasi untuk rekonsiliasi pihak ketiga secara manual lambat dan rentan kesalahan format."
          },
          "flow": [
            "Fetch Activity",
            "Query Aggregate",
            "Format TXT/CSV",
            "Write to MinIO",
            "Flag Complete"
          ],
          "role": {
            "en": "Automated generation of end-of-day reconciliation data with strict external spec validation.",
            "id": "Otomatisasi pembuatan file rekonsiliasi end-of-day yang presisi dan kompatibel dengan sistem eksternal."
          }
        },
        {
          "codeName": "sch-get-data-flow-briva",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Downstream modules required filtered, reliable transaction stream distributions periodically.",
            "id": "Modul perbankan hilir membutuhkan aliran data transaksi yang terkontrol dan tersaring secara berkala."
          },
          "flow": [
            "Fetch Params",
            "Retrieve Stream",
            "Filter & Transform",
            "Publish Downstream",
            "Flag Done"
          ],
          "role": {
            "en": "Engineered a robust streaming distribution pipeline for core downstream services.",
            "id": "Mengembangkan pipeline distribusi aliran data transaksi yang andal untuk modul-modul hilir."
          }
        },
        {
          "codeName": "sch-get-ddhist-briva",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Heavy load when extracting massive historical mutation data (DDHIST) directly from core database.",
            "id": "Sistem pelaporan kesulitan menarik data mutasi historis (DDHIST) langsung dari core secara efisien."
          },
          "flow": [
            "Fetch Params",
            "Extract DDHIST",
            "Cleanse & Transform",
            "Insert Reporting DB",
            "Update Status"
          ],
          "role": {
            "en": "Built historical mutation extraction pipeline tailored for high-volume customer analytics.",
            "id": "Membangun pipeline ekstraksi data mutasi historis untuk business intelligence dan pelaporan pelanggan."
          }
        },
        {
          "codeName": "sch-param-ftp-briva",
          "tags": [
            "Golang",
            "SFTP",
            "SQL Server"
          ],
          "problem": {
            "en": "Inefficiency in distributing updated SFTP credentials across hundreds of banking client endpoints.",
            "id": "Ketidakefisienan dalam mendistribusikan pembaruan konfigurasi FTP/SFTP secara masal ke berbagai klien."
          },
          "flow": [
            "Fetch Params",
            "Build Configs",
            "Broadcast SFTP Nodes",
            "Update Status"
          ],
          "role": {
            "en": "Engineered automated centralized parameter distribution engine guaranteeing credential parity.",
            "id": "Membangun service distribusi parameter FTP terpusat otomatis untuk menjaga konsistensi kredensial."
          }
        },
        {
          "codeName": "sch-sp-executor-briva",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Need for asynchronous execution of heavy database Stored Procedures without query timeout risks.",
            "id": "Membutuhkan mekanisme otomatis yang kuat untuk menjalankan Stored Procedures (SP) asinkron tanpa timeout."
          },
          "flow": [
            "Fetch Params",
            "Async Execute SP",
            "Catch Output/Error",
            "Update Status"
          ],
          "role": {
            "en": "Built generic background executor to schedule heavy database routines reliably.",
            "id": "Membangun task executor generik untuk menjadwalkan eksekusi logika backend di dalam database."
          }
        },
        {
          "codeName": "mt940-pln-encryptDecrypt",
          "tags": [
            "Python",
            "AES",
            "GPG"
          ],
          "problem": {
            "en": "Manual cryptographic operations on institutional settlement files risked security breaches and transfer drops.",
            "id": "Enkripsi/dekripsi manual file settlement dan klien rentan kesalahan manusia dan gagal transfer."
          },
          "flow": [
            "Fetch Params",
            "Prereq Check",
            "Multi-Thread Cipher (AES/GPG)",
            "Update Status"
          ],
          "role": {
            "en": "Optimized multithreaded Python scripts with automated retry and key integrity test suites (<b>test_encrypt</b>).",
            "id": "Mengelola & mengoptimasi script Python dengan multi-threading dan logika auto-retry serta modul validasi fungsionalitas kunci enkripsi."
          }
        },
        {
          "codeName": "ms-briva-snap",
          "tags": [
            "Golang",
            "SQL Server"
          ],
          "problem": {
            "en": "Mandate to capture transaction data state snapshots at end-of-day for regulatory auditing.",
            "id": "Kebutuhan mengambil dan menyimpan snapshot data transaksi BRIVA untuk keperluan audit end-of-day (EOD)."
          },
          "flow": [
            "Fetch Activity",
            "Query Delta TX",
            "Snapshot to Cold DB",
            "Update Status"
          ],
          "role": {
            "en": "Engineered automated snapshot microservice maintaining audit trail compliance.",
            "id": "Membangun dari awal service snapshot untuk memastikan integritas data audit dan kepatuhan sistem."
          }
        },
        {
          "codeName": "SOP Query Documentation",
          "tags": [
            "SQL Server",
            "Standardization"
          ],
          "problem": {
            "en": "Operational ambiguity and lack of auditable execution guidelines across database environments.",
            "id": "Sering terjadi kebingungan operasional dan kurangnya standar yang dapat diaudit untuk eksekusi query."
          },
          "flow": [
            "Analyze Schema",
            "Draft SOP",
            "Stakeholder Review",
            "Official Release"
          ],
          "role": {
            "en": "Authored formal procedural standards for safe database updates, inserts, and operational queries.",
            "id": "Menulis dokumen pedoman resmi untuk query (Insert, Update, Select) guna memastikan kepatuhan audit operasional."
          }
        }
      ]
    },
    {
      "id": "job-02",
      "node": "02",
      "company": "Hitachi Channel Solutions",
      "role": {
        "en": "Software Engineer",
        "id": "Rekayasa Perangkat Lunak"
      },
      "period": {
        "en": "Jan 2024 – Sep 2025",
        "id": "Jan 2024 – Sep 2025"
      },
      "drawerTitle": {
        "en": "ATM Fleet Monitoring, Data Ingestion & Server Provisioning",
        "id": "Monitoring Armada ATM, Ingestion Data & Setup Server"
      },
      "projectCount": 3,
      "projects": [
        {
          "codeName": "IMHOTS & EJ Fleet Monitoring",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL",
            "ATM Monitoring"
          ],
          "problem": {
            "en": "Banking partners lacked unified real-time visibility over physical ATM terminal statuses, cash availability, and Electronic Journal (EJ) operational logs across multi-vendor fleets.",
            "id": "Bank mitra tidak memiliki visibilitas real-time terpadu atas status mesin ATM fisik, ketersediaan kas, dan log operasional Electronic Journal (EJ) pada ribuan armada mesin."
          },
          "flow": [
            "ATM Device Logs",
            "EJ Stream Parser",
            "Laravel Backend",
            "MySQL Storage",
            "Fleet Dashboard"
          ],
          "role": {
            "en": "Engineered core monitoring modules, resolved mission-critical production defects, and developed custom analytical features tailored to institutional banking requirements.",
            "id": "Mengembangkan modul monitoring inti, menuntaskan perbaikan bug produksi skala kritikal, dan mengimplementasikan fitur kustom sesuai kebutuhan operasional bank mitra."
          }
        },
        {
          "codeName": "Database Indexing & Excel Bulk Ingestion",
          "tags": [
            "MySQL",
            "SQL Server",
            "Python",
            "Bulk Insert"
          ],
          "problem": {
            "en": "Severe query latency impeded large-scale reporting, while manual spreadsheet data input from operational staff caused substantial workflow bottlenecks.",
            "id": "Latensi query yang tinggi menghambat pelaporan skala besar, serta input manual data operasional dari file Excel memakan banyak waktu dan rentan eror."
          },
          "flow": [
            "Excel Path Scanner",
            "Python Miniscript",
            "SQL Transformation",
            "Temporary Tables",
            "Indexed Bulk Insert"
          ],
          "role": {
            "en": "Optimized complex reporting queries via strategic indexing and temporary tables, and developed automated Python miniscripts to convert Excel files into SQL format for rapid bulk ingestion.",
            "id": "Mengoptimasi query laporan menggunakan temporary table dan strategic indexing, serta membangun miniscript Python untuk otomatisasi konversi file Excel ke SQL bulk insert."
          }
        },
        {
          "codeName": "Client Server Provisioning & Auto-Start Daemons",
          "tags": [
            "Apache",
            "XAMPP",
            "MySQL",
            "SQL Server",
            "DevOps/Infra"
          ],
          "problem": {
            "en": "Client bank environments required bespoke server and database provisioning, while background ingestion services frequently dropped offline after physical host reboots.",
            "id": "Lingkungan server bank klien memerlukan konfigurasi dependensi mandiri, dan background service ingestion sering mati tanpa pemulihan otomatis pasca server fisik reboot."
          },
          "flow": [
            "Server Setup",
            "Dependency Config",
            "Database Setup",
            "Daemon Service Hook",
            "Auto-Restart Check"
          ],
          "role": {
            "en": "Configured client server hosts via Apache and XAMPP, provisioned MySQL and SQL Server database environments, and engineered auto-start service configurations ensuring zero-downtime daemon recovery after server reboots.",
            "id": "Melakukan setup host server klien via Apache dan XAMPP, konfigurasi database MySQL & SQL Server, serta merancang konfigurasi auto-start service agar daemon ingestion otomatis aktif kembali saat reboot."
          }
        }
      ]
    },
    {
      "id": "job-03",
      "node": "03",
      "company": "OCBC NISP",
      "role": {
        "en": "Software Engineer",
        "id": "Rekayasa Perangkat Lunak"
      },
      "period": {
        "en": "Jan 2022 – Feb 2024",
        "id": "Jan 2022 – Feb 2024"
      },
      "drawerTitle": {
        "en": "ATM Reconciliation Web Migration & Core Banking AS400 Audit",
        "id": "Migrasi Web Rekonsiliasi ATM & Audit Core Banking AS400"
      },
      "projectCount": 2,
      "projects": [
        {
          "codeName": "ProrRekonATM Web Migration",
          "tags": [
            "React.js",
            "Golang",
            "PostgreSQL",
            "Axios",
            "REST API"
          ],
          "problem": {
            "en": "The legacy desktop ATM billing reconciliation system was sluggish, locked to specific operating systems, and difficult to maintain due to monolithic procedural code.",
            "id": "Aplikasi desktop lama untuk rekonsiliasi penagihan ATM sangat lambat, terkunci pada OS tertentu, dan sulit dipelihara akibat kode prosedural monolitik."
          },
          "flow": [
            "React Web UI",
            "Axios Client",
            "Golang REST API",
            "Business Layer",
            "PostgreSQL Transaction",
            "Client JSON"
          ],
          "role": {
            "en": "Led end-to-end full-stack re-architecture: built modern interactive UI in React.js, engineered high-throughput REST APIs in Golang with PostgreSQL, and cleanly decoupled reconciliation business logic.",
            "id": "Memimpin perancangan ulang full-stack menyeluruh: membangun UI interaktif modern dengan React.js, merekayasa REST API berkecepatan tinggi dengan Golang dan PostgreSQL, serta memisahkan logika bisnis rekonsiliasi secara bersih."
          }
        },
        {
          "codeName": "Core Banking AS400 Validation & Physical ATM Testing",
          "tags": [
            "AS400",
            "Stored Procedures",
            "Core Banking",
            "Hardware Testing",
            "SQL Server"
          ],
          "problem": {
            "en": "Billing discrepancies between the bank and billers demanded rigorous ledger verification against core banking data and real-world cash dispensing validation.",
            "id": "Ketidaksesuaian data billing antara bank dan mitra biller menuntut verifikasi audit ketat ke buku besar core banking serta validasi fisik pengeluaran kas."
          },
          "flow": [
            "Billing Data Ingest",
            "Stored Procedure Run",
            "AS400 Ledger Cross-Check",
            "Physical ATM Cash Test",
            "Reconciliation Match"
          ],
          "role": {
            "en": "Maintained mission-critical reconciliation Stored Procedures, conducted data cross-checks against the AS400 core banking system, and conducted on-device hardware testing on physical ATMs to validate cash and network timeout scenarios.",
            "id": "Mengelola Stored Procedure rekonsiliasi penagihan, melakukan cross-check data langsung ke core banking AS400, serta melakukan pengujian perangkat keras langsung di mesin ATM fisik untuk validasi skenario transaksi dan kas riil."
          }
        }
      ]
    },
    {
      "id": "job-04",
      "node": "04",
      "company": "KNusantara Group",
      "role": {
        "en": "Backend Developer & Systems Analyst",
        "id": "Pengembang Backend & Analis Sistem"
      },
      "period": {
        "en": "Apr 2023 – Dec 2023",
        "id": "Apr 2023 – Dec 2023"
      },
      "drawerTitle": {
        "en": "Enterprise Systems Analysis & Centralized API Services",
        "id": "Analisis Sistem Enterprise & Layanan API Terpusat"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Enterprise Centralized API Services",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL",
            "Systems Analysis",
            "REST API"
          ],
          "problem": {
            "en": "Disconnected internal business applications suffered from data silos, requiring comprehensive system analysis and unified, secure API endpoints.",
            "id": "Berbagai aplikasi internal perusahaan terisolasi dan tidak terhubung, membutuhkan analisis sistem mendalam serta endpoint API yang aman dan terpusat."
          },
          "flow": [
            "Requirements Analysis",
            "Data Flow Contract",
            "Laravel Service",
            "MySQL Integration",
            "Stakeholder Sign-Off"
          ],
          "role": {
            "en": "Executed structured technical systems analysis prior to development, designed relational schemas, and built centralized RESTful APIs with PHP Laravel and MySQL to seamlessly integrate enterprise business workflows.",
            "id": "Melakukan analisis kebutuhan teknis sebelum pengkodean, mendesain skema relasional, dan membangun layanan REST API terpusat dengan PHP Laravel dan MySQL untuk mengintegrasikan alur bisnis perusahaan."
          }
        }
      ]
    },
    {
      "id": "job-05",
      "node": "05",
      "company": "PT Asuransi BRI Life",
      "role": {
        "en": "Backend Engineer",
        "id": "Insinyur Backend"
      },
      "period": {
        "en": "Jan 2020 – Dec 2022",
        "id": "Jan 2020 – Dec 2022"
      },
      "drawerTitle": {
        "en": "Insurance Core Backend & Policy Data Transformation",
        "id": "Backend Inti Asuransi & Transformasi Data Polis"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Core Insurance Policy Backend System",
          "tags": [
            "Node.js",
            "Express.js",
            "SQL Server",
            "Azure Data Studio",
            "Data Modeling"
          ],
          "problem": {
            "en": "Complex insurance policy relational schemas and strict underwriting regulations could not be directly consumed by client-facing frontend applications without rigorous data formatting.",
            "id": "Struktur data polis asuransi yang kompleks serta aturan bisnis underwriting yang ketat tidak dapat langsung dikonsumsi frontend tanpa transformasi dan validasi data yang presisi."
          },
          "flow": [
            "Policy Database Schema",
            "Azure Data Studio Tuning",
            "Express.js Logic",
            "Transformation Layer",
            "Frontend JSON Contract"
          ],
          "role": {
            "en": "Engineered Node.js and Express backend services, tuned relational data models in SQL Server via Azure Data Studio, and transformed raw insurance datasets into secure, consumable API payloads for frontend interfaces.",
            "id": "Mengembangkan backend service Node.js dan Express, mengoptimasi model data SQL Server menggunakan Azure Data Studio, serta mentransformasikan data polis mentah menjadi payload API yang aman dan siap pakai untuk tim frontend."
          }
        }
      ]
    }
  ],
  "education": [
    {
      "degree": {
        "en": "Bachelor in Information Systems",
        "id": "Sarjana Sistem Informasi"
      },
      "school": "Universitas Mercu Buana",
      "details": [
        "2018 – 2022",
        "GPA 3.71 • Cum Laude"
      ]
    },
    {
      "degree": {
        "en": "Fullstack Software Engineering Bootcamp",
        "id": "Bootcamp Rekayasa Perangkat Lunak Fullstack"
      },
      "school": "Code Academy",
      "details": [
        "2019",
        "Java Spring Boot & React.js"
      ]
    },
    {
      "degree": {
        "en": "Major of Office Administration",
        "id": "Administrasi Perkantoran"
      },
      "school": "SMKN 42 Jakarta",
      "details": [
        "2014 – 2017",
        "Jakarta Barat"
      ]
    }
  ],
  "marquee": {
    "track1": [
      "GOLANG",
      "CLEAN ARCHITECTURE",
      "SQL SERVER & POSTGRESQL",
      "DOCKER CONTAINERIZATION",
      "HIGH CONCURRENCY",
      "DISTRIBUTED DATA SCHEDULERS",
      "ZERO DOWNTIME BULK INGESTION",
      "CORE BANKING INFRASTRUCTURE"
    ],
    "track2": [
      "TRANSACTION INTEGRITY",
      "HIGH AVAILABILITY",
      "AUTOMATED RECONCILIATION",
      "AS400 & CORE BANKING",
      "AES/GPG CIPHER ENCRYPTION",
      "MINIO S3 COMPLIANCE",
      "PROVEN PRODUCTION RESILIENCE",
      "5+ FINANCIAL INSTITUTIONS"
    ]
  }
};

export default portfolioConfig;
