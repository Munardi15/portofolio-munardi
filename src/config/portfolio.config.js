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
    "roleBadge": "",
    "status": {
      "en": "SOFTWARE ENGINEER • AVAILABLE FOR ROLES",
      "id": "SOFTWARE ENGINEER • SIAP REKRUTMEN"
    },
    "pitch": {
      "en": "Software Engineer with <b>6+ years of experience</b> developing reliable applications, automating workflows, and optimizing database performance. Proven background delivering software solutions across diverse tech stacks (Golang, PHP, Node.js, React, and Python) in banking and enterprise environments.",
      "id": "Software Engineer dengan pengalaman <b>6+ tahun</b> dalam mengembangkan aplikasi yang andal, otomasi workflow, dan optimasi performa database. Berpengalaman menghadirkan solusi perangkat lunak lintas berbagai tech stack (Golang, PHP, Node.js, React, dan Python) di lingkungan perbankan dan enterprise."
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
      "en": "Engineering Approach.",
      "id": "Pendekatan Rekayasa."
    },
    "description": {
      "en": "Building dependable backend systems, modernizing workflows, and solving core technical problems across diverse stacks.",
      "id": "Membangun sistem backend yang andal, memodernisasi alur kerja, dan menyelesaikan masalah teknis inti di berbagai tech stack."
    },
    "narrative": {
      "en": "As a <b>Software Engineer</b>, my primary strength is technical adaptability and practical problem-solving. Having worked across diverse banking and enterprise environments, I adapt quickly to new codebases and deliver robust systems using the right tools for the job—including <b>Golang, Python, PHP, Node.js, and Java</b>.<br><br>To me, technology is a tool to solve real operational and business challenges. From modernizing legacy workflows and automating data pipelines to optimizing database performance, my focus is always on engineering stable, efficient, and maintainable software in production.",
      "id": "Sebagai <b>Software Engineer</b>, kekuatan utama saya terletak pada kemampuan adaptasi dan pemecahan masalah praktis. Berpengalaman di berbagai institusi perbankan dan enterprise, saya terbiasa cepat mempelajari codebase baru serta mengeksekusi kebutuhan sistem menggunakan teknologi yang paling sesuai—baik <b>Golang, Python, PHP, Node.js, maupun Java</b>.<br><br>Bagi saya, teknologi adalah sarana untuk menyelesaikan kebutuhan bisnis dan operasional. Mulai dari modernisasi proses legacy, otomasi data pipeline, hingga optimasi query database, fokus saya adalah memastikan sistem berjalan stabil, efisien, dan mudah dirawat di lingkungan produksi."
    },
    "badges": [
      "End-to-End Software Development",
      "API & System Integration",
      "Database Optimization",
      "Clean Architecture"
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
      "value": "16+",
      "label": {
        "en": "Schedulers & Banking Portals at BRI",
        "id": "Scheduler & Portal Perbankan di BRI"
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
      "value": "20+",
      "label": {
        "en": "Production Projects Delivered",
        "id": "Proyek Produksi Terkirim"
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
        "id": "Back End Engineer"
      },
      "period": {
        "en": "Oct 2025 – Now",
        "id": "Okt 2025 – Sekarang"
      },
      "drawerTitle": {
        "en": "BRIVA Schedulers, Nostro SWIFT Reconciliations, Rekon Enterprise & Encryption Pipelines",
        "id": "Scheduler BRIVA, Rekonsiliasi Nostro SWIFT, Rekon Enterprise & Pipeline Enkripsi"
      },
      "projectCount": 16,
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
          "codeName": "nostro-web & parsingnostro.py",
          "tags": [
            "PHP",
            "CodeIgniter",
            "Python",
            "SWIFT MT940/950",
            "SQL Server",
            "Reconciliation"
          ],
          "problem": {
            "en": "Manual foreign exchange reconciliation between internal bank ledger records (BRINET) and foreign correspondent bank statements (SWIFT MT940/MT950) was slow and prone to unresolved transactions (unmatched/OPEN) and duplicate records.",
            "id": "Rekonsiliasi manual mutasi valuta asing antara catatan internal bank (BRINET) dan rekening koran bank koresponden luar negeri (SWIFT MT940/MT950) lambat dan berisiko tinggi terhadap transaksi menggantung (unmatched/OPEN) serta mutasi ganda (duplicate suspect)."
          },
          "flow": [
            "SFTP MT File Retrieval",
            "Python SWIFT MT Parser",
            "Tag & Balance Extraction",
            "Auto-Matching Engine",
            "Settlement & Nota Dinas Portal"
          ],
          "role": {
            "en": "Maintained and enhanced the web reconciliation portal using CodeIgniter PHP and a dedicated Python SWIFT parser engine (<b>parsingnostro.py</b>). Handled MT940/MT950 tag & balance extraction, suspect/duplicate detection, auto-matching between debit/credit legs, and automated daily official memo (nota dinas) & balance sheet reporting on SQL Server.",
            "id": "Memelihara dan mengembangkan modul web rekonsiliasi berbasis CodeIgniter PHP serta engine parser SWIFT berbasis Python (<b>parsingnostro.py</b>). Mengimplementasikan validasi tag saldo/mutasi MT940/MT950, pendeteksian transaksi suspect, auto-matching berbasis kriteria polaritas debit/kredit, serta fitur pelaporan nota dinas dan neraca di database SQL Server."
          }
        },
        {
          "codeName": "mt940-gen & mt940-api",
          "tags": [
            "Node.js",
            "Express.js",
            "PHP",
            "CodeIgniter 4",
            "SFTP/FTP",
            "SQL Server"
          ],
          "problem": {
            "en": "Corporate clients (such as Coca-Cola and partner enterprises) required scheduled generation and direct delivery of electronic bank statements formatted in global SWIFT MT940 standard via secure SFTP/FTP integration.",
            "id": "Kebutuhan nasabah korporat (seperti Coca-Cola dan korporasi mitra) untuk mendapatkan statement rekening koran format standar perbankan global (SWIFT MT940) secara terjadwal dan terintegrasi langsung via SFTP/FTP."
          },
          "flow": [
            "Corporate Client Config",
            "Transaction Query on DB",
            "MT940 Syntax Generator",
            "SFTP/FTP Distribution",
            "Generation Log Tracking"
          ],
          "role": {
            "en": "Enhanced and maintained the CodeIgniter 4 web interface (<b>mt940-gen</b>) and Node.js Express REST API microservice (<b>mt940-api</b>). Handled corporate client Virtual Account mapping, MT940 statement formatting, automated SFTP distribution pipeline, and database log tracking on SQL Server.",
            "id": "Mengembangkan dan memelihara modul portal CodeIgniter 4 (<b>mt940-gen</b>) dan backend Node.js Express REST API (<b>mt940-api</b>). Mengimplementasikan mapping Virtual Account/rekening nasabah korporat, orkestrasi pembuatan statement MT940, transfer file aman via SFTP, dan pemantauan status generate log di SQL Server."
          }
        },
        {
          "codeName": "rekonenterprise4 & re-api",
          "tags": [
            "CodeIgniter 4",
            "Node.js",
            "Express.js",
            "RTGS Reconciliation",
            "SAST Hardening",
            "CSV Stream"
          ],
          "problem": {
            "en": "The multi-channel enterprise transaction reconciliation portal required new endpoint integration (RTGS incoming/outgoing), reliable large-scale export streaming without memory exhaustion, standardized response envelopes, and remediation of Checkmarx SAST security findings.",
            "id": "Sistem rekonsiliasi transaksi enterprise multi-kanal (termasuk RTGS) membutuhkan integrasi endpoint baru, stabilitas stream ekspor laporan berkapasitas besar, standarisasi respons API, serta pemenuhan standar keamanan aplikasi ketat dari audit SAST Checkmarx."
          },
          "flow": [
            "RTGS MT Data Stream",
            "Node.js Re-API Processing",
            "Stream CSV/Excel Export",
            "CI4 Portal Frontend",
            "Checkmarx SAST Hardening"
          ],
          "role": {
            "en": "Delivered feature enhancements and security remediations across CodeIgniter 4 (<b>rekonenterprise4</b>) and Node.js microservice (<b>re-api</b>). Integrated RTGS reconciliation endpoints, standardized API response envelopes (<code>RESPONSE_CODE</code> & <code>RESPONSE_DATA</code>), resolved HTTP stream header errors on large CSV exports, and remediated Checkmarx SAST security vulnerabilities (disabling debug error leaks, input sanitization, and config hardening).",
            "id": "Mengembangkan enhancement fitur pada portal CodeIgniter 4 (<b>rekonenterprise4</b>) dan microservice Node.js (<b>re-api</b>). Mengintegrasikan endpoint rekonsiliasi RTGS (incoming/outgoing), merefaktor dan menstandarisasi response envelope API (<code>RESPONSE_CODE</code> & <code>RESPONSE_DATA</code>), memperbaiki isu stream headers pada ekspor CSV berukuran masif, serta menyelesaikan remediasi celah keamanan audit SAST Checkmarx (error suppression, sanitasi input, dan penguatan konfigurasi server)."
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
        "id": "Software Engineer"
      },
      "period": {
        "en": "2024 – Sep 2025",
        "id": "2024 – Sep 2025"
      },
      "drawerTitle": {
        "en": "ATM Fleet Monitoring, Database Optimization & Server Setup",
        "id": "Monitoring Armada ATM, Optimasi Database & Setup Server"
      },
      "projectCount": 4,
      "projects": [
        {
          "codeName": "IMHOTS & EJ Dashboard (ATM Asset Management)",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL",
            "ATM Telemetry",
            "EJ Processing"
          ],
          "problem": {
            "en": "Banking partners required a unified platform to monitor real-time operational health, cash availability, and Electronic Journal (EJ) data across multi-bank fleets of 8,000+ ATM terminals.",
            "id": "Bank mitra membutuhkan platform terpadu untuk memantau status operasional perangkat, ketersediaan kas, dan data Electronic Journal (EJ) pada armada 8.000+ mesin ATM lintas bank secara real-time."
          },
          "flow": [
            "ATM Device Telemetry",
            "EJ Stream Parser",
            "Laravel Backend Logic",
            "MySQL Storage",
            "Fleet Monitoring Dashboard"
          ],
          "role": {
            "en": "Developed web modules for IMHOTS and EJ Dashboard using PHP Laravel and MySQL, resolved production defects, implemented custom feature requests from client banks, and optimized application performance for continuous fleet monitoring.",
            "id": "Mengembangkan modul web aplikasi IMHOTS dan EJ Dashboard berbasis PHP Laravel dan MySQL, menangani perbaikan bug produksi, mengakomodasi request fitur kustom dari bank klien, dan mengoptimasi performa aplikasi untuk monitoring armada ATM."
          }
        },
        {
          "codeName": "Database Indexing & Temporary Tables Optimization",
          "tags": [
            "MySQL",
            "Query Optimization",
            "Indexing Strategy",
            "Temporary Tables"
          ],
          "problem": {
            "en": "Growing transaction and monitoring history volumes resulted in significant latency during periodic reporting and aggregate data queries.",
            "id": "Volume data transaksi dan riwayat monitoring ATM yang terus bertambah menyebabkan latensi tinggi saat proses pelaporan berkala dan query agregasi data."
          },
          "flow": [
            "Slow Query Profile",
            "Column Usage Analysis",
            "Strategic Indexing",
            "Temporary Table Creation",
            "Accelerated Data Aggregation"
          ],
          "role": {
            "en": "Significantly accelerated data processing performance by implementing strategic indexing on frequently queried columns and utilizing MySQL temporary tables for rapid aggregation of operational reporting datasets.",
            "id": "Meningkatkan kecepatan pemrosesan data secara signifikan dengan menerapkan indexing pada kolom-kolom query kritikal dan memanfaatkan temporary table di MySQL untuk mempercepat agregasi data pelaporan operasional."
          }
        },
        {
          "codeName": "Excel-to-SQL Miniscripts & File-Path Bulk Ingestion",
          "tags": [
            "PHP CLI",
            "Miniscripts",
            "Excel-to-SQL",
            "Bulk Insert",
            "Automation"
          ],
          "problem": {
            "en": "Operational staff manually inputted spreadsheet records into the database, creating workflow bottlenecks and increasing risk of input errors.",
            "id": "Input data laporan operasional dari file Excel ke database masih dilakukan manual oleh staf, memakan banyak waktu dan berisiko salah ketik."
          },
          "flow": [
            "Client Excel Files",
            "Miniscript CLI Parser",
            "SQL Syntax Generator",
            "File-Path Bulk Ingestion",
            "High-Speed DB Import"
          ],
          "role": {
            "en": "Developed CLI automation miniscripts to parse Excel spreadsheets into valid SQL insert statements, and engineered bulk insert utilities reading directly from file paths to dramatically speed up mass data ingestion.",
            "id": "Membangun miniscript otomasi untuk mengonversi file Excel menjadi format SQL siap import, serta merancang script bulk insert yang membaca path file langsung dari sistem berkas untuk mempercepat pemasukan data massal ke database."
          }
        },
        {
          "codeName": "Client Server Setup (Apache/XAMPP) & Auto-Start Service Recovery",
          "tags": [
            "Apache",
            "XAMPP",
            "MySQL",
            "SQL Server",
            "Windows/Linux Services"
          ],
          "problem": {
            "en": "Client banks required isolated on-premise server environments with specific database dependencies, while background services failed to automatically recover following host server reboots.",
            "id": "Setiap bank mitra memerlukan penyiapan server mandiri dengan dependensi database terpisah, dan background service sering mati tanpa pemulihan otomatis saat server fisik reboot."
          },
          "flow": [
            "Server Host Provisioning",
            "Apache / XAMPP Configuration",
            "MySQL & SQL Server Setup",
            "Service Daemon Registration",
            "Reboot Auto-Recovery Verification"
          ],
          "role": {
            "en": "Provisioned and configured client servers using manual Apache setups and XAMPP, installed MySQL and SQL Server dependencies, and implemented auto-start service configurations ensuring essential background services automatically resume execution after server restarts.",
            "id": "Melakukan setup server untuk tiap klien bank menggunakan konfigurasi Apache manual maupun XAMPP, instalasi dependensi database MySQL & SQL Server, serta mengonfigurasi fitur auto-start service agar background process yang diperlukan otomatis aktif kembali saat server menyala pasca restart."
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
        "id": "Software Engineer"
      },
      "period": {
        "en": "2022 – Feb 2024",
        "id": "2022 – Feb 2024"
      },
      "drawerTitle": {
        "en": "ProrRekonATM Web Migration, AS400 Query Checks & Physical ATM Testing",
        "id": "Migrasi Web ProrRekonATM, Pengecekan Query AS400 & Uji Fisik ATM"
      },
      "projectCount": 2,
      "projects": [
        {
          "codeName": "ProrRekonATM Web Migration (React.js & Golang REST API)",
          "tags": [
            "React.js",
            "Golang",
            "PostgreSQL",
            "Axios",
            "REST API",
            "Clean Architecture"
          ],
          "problem": {
            "en": "The internal ProrRekonATM desktop application relied heavily on procedural Stored Procedures, presenting maintenance hurdles and accessibility constraints for operations during ongoing billing reconciliation between the bank and external billers.",
            "id": "Aplikasi internal ProrRekonATM sebelumnya berbasis desktop prosedural yang sangat bergantung pada Stored Procedure, sehingga tim operasional menghadapi keterbatasan aksesibilitas dan perawatan kode saat proses rekonsiliasi billing penagihan dengan biller berjalan."
          },
          "flow": [
            "Legacy Desktop Logic",
            "Golang REST API Design",
            "PostgreSQL Storage",
            "Axios Client Layer",
            "React.js Web Interface"
          ],
          "role": {
            "en": "Re-architected and re-coded the procedural desktop application into a modern web application using React.js on the frontend and a Golang REST API with PostgreSQL on the backend, integrating communications via Axios and restructuring business logic from stored procedures into maintainable API services without disrupting active reconciliation cycles.",
            "id": "Mendesain ulang dan merekonstruksi (re-code) aplikasi desktop menjadi web application menggunakan React.js di frontend dan Golang REST API dengan database PostgreSQL di backend, mengintegrasikannya via Axios, serta memindahkan sebagian logika prosedural ke API secara terstruktur tanpa mengganggu jalannya rekonsiliasi aktif."
          }
        },
        {
          "codeName": "AS400 Core Banking Query Cross-Checks & Physical ATM Testing",
          "tags": [
            "AS400",
            "Core Banking",
            "SQL Stored Procedures",
            "ATM Hardware Testing",
            "Reconciliation"
          ],
          "problem": {
            "en": "Billing discrepancies between bank records and external billers required direct verification against core banking ledger data and physical ATM transaction verification.",
            "id": "Ketidaksesuaian data billing antara catatan bank dan mitra biller memerlukan penelusuran data transaksi secara langsung ke pembukuan core banking serta verifikasi fisik pada perangkat ATM."
          },
          "flow": [
            "Biller Billing Data",
            "Stored Procedure Execution",
            "AS400 Query Cross-Check",
            "Physical ATM Cash Test",
            "Discrepancy Resolution"
          ],
          "role": {
            "en": "Maintained reconciliation Stored Procedures, performed direct query cross-checks against the AS400 core banking database to trace billing discrepancies against ledger entries, and conducted physical on-device ATM testing to validate live cash dispensing and transaction flows.",
            "id": "Memelihara Stored Procedure rekonsiliasi penagihan, melakukan pengecekan query secara langsung ke sistem core banking AS400 untuk memverifikasi dan mencocokkan data billing dengan transaksi, serta melakukan pengujian langsung pada hardware mesin ATM fisik untuk memastikan keakuratan transaksi dan pengeluaran kas riil."
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
        "id": "Backend Developer & Analis Sistem"
      },
      "period": {
        "en": "Apr 2023 – Dec 2023",
        "id": "Apr 2023 – Des 2023"
      },
      "drawerTitle": {
        "en": "REST API Architecture & Systems Workflow Analysis",
        "id": "Arsitektur REST API & Analisis Alur Sistem"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Enterprise REST API & Systems Workflow Analysis",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL",
            "REST API",
            "Systems Analysis",
            "Workflow Modeling"
          ],
          "problem": {
            "en": "Developing new internal business applications required rigorous upfront requirement analysis, clear workflow mapping, and dependable API endpoints for frontend consumption.",
            "id": "Kebutuhan pembangunan aplikasi internal baru menuntut analisis kebutuhan bisnis yang jelas, desain alur data yang terstruktur, serta ketersediaan endpoint API yang andal untuk integrasi antarmuka."
          },
          "flow": [
            "Stakeholder Requirement Gathering",
            "System Workflow Modeling",
            "Relational Schema Design",
            "Laravel REST API Development",
            "MySQL Integration & Testing"
          ],
          "role": {
            "en": "Conducted technical system analysis and workflow modeling prior to development, designed relational MySQL database schemas, and built structured RESTful APIs using PHP Laravel to power application features.",
            "id": "Melakukan analisis kebutuhan teknis dan pemodelan alur sistem secara mendalam sebelum proses pengembangan, merancang skema basis data MySQL, dan membangun RESTful API terstruktur menggunakan PHP Laravel untuk integrasi fungsionalitas aplikasi."
          }
        }
      ]
    },
    {
      "id": "job-05",
      "node": "05",
      "company": "PT Asuransi BRI Life",
      "role": {
        "en": "Backend Developer",
        "id": "Backend Developer"
      },
      "period": {
        "en": "2020 – 2022",
        "id": "2020 – 2022"
      },
      "drawerTitle": {
        "en": "Insurance Core Backend & Policy Data Modeling (Node.js & SQL Server)",
        "id": "Backend Sistem Asuransi & Pemodelan Data Polis (Node.js & SQL Server)"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Insurance Policy Data Modeling & REST API",
          "tags": [
            "Node.js",
            "Express.js",
            "SQL Server",
            "Azure Data Studio",
            "JSON Transformation"
          ],
          "problem": {
            "en": "Insurance policy datasets and underwriting workflows required structured data modeling in SQL Server and clean, standardized JSON output formatting for smooth frontend consumption.",
            "id": "Data polis asuransi dan alur bisnis operasional memerlukan pemodelan data yang tepat di SQL Server serta penyajian format output data (JSON) yang terstandarisasi agar siap dikonsumsi oleh tim frontend."
          },
          "flow": [
            "Insurance Policy Data",
            "Azure Data Studio Query Modeling",
            "Node.js Express Backend",
            "Business Logic Transformation",
            "Frontend-Ready JSON Contract"
          ],
          "role": {
            "en": "Developed backend services using Node.js and the Express framework, engineered data models and optimized queries on SQL Server via Azure Data Studio, and shaped output data structures (JSON) to match insurance business workflows for frontend integration.",
            "id": "Membangun sistem backend menggunakan Node.js dan framework Express, melakukan pemodelan data serta penulisan query pada SQL Server menggunakan Azure Data Studio, dan menyesuaikan struktur output data (JSON) sesuai kebutuhan alur proses bisnis asuransi agar dapat diintegrasikan dengan baik oleh tim frontend."
          }
        }
      ]
    },
    {
      "id": "job-06",
      "node": "06",
      "company": "Bootcamp Code Academy",
      "role": {
        "en": "Fullstack Engineering Trainee",
        "id": "Trainee Software Engineer Fullstack"
      },
      "period": {
        "en": "2019",
        "id": "2019"
      },
      "drawerTitle": {
        "en": "Fullstack Foundations with Java Spring Boot & React.js",
        "id": "Fondasi Fullstack dengan Java Spring Boot & React.js"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Fullstack Application Development (Java Spring Boot & React)",
          "tags": [
            "Java",
            "Spring Boot",
            "React.js",
            "JavaScript",
            "MySQL",
            "REST API"
          ],
          "problem": {
            "en": "Building solid software engineering foundations through intensive enterprise programming training covering OOP patterns, relational data structures, and modern web interfaces.",
            "id": "Membangun fondasi software engineering yang kokoh melalui pelatihan intensif pemrograman enterprise berbasis pola OOP, struktur data relasional, dan antarmuka web modern."
          },
          "flow": [
            "OOP Concept Modeling",
            "Java Spring Boot REST API",
            "Relational Database",
            "React.js Component Architecture",
            "End-to-End Integration"
          ],
          "role": {
            "en": "Learned and implemented enterprise programming with Java Spring Boot on the backend and React.js on the frontend, designing REST APIs, managing database interactions, and establishing fundamental fullstack software practices.",
            "id": "Mempelajari dan mempraktikkan pemrograman backend menggunakan Java dan framework Spring Boot, serta frontend menggunakan JavaScript dan React.js, mencakup perancangan REST API dan integrasi data end-to-end."
          }
        }
      ]
    },
    {
      "id": "job-07",
      "node": "07",
      "company": "IT Freelance",
      "role": {
        "en": "Computer Systems & Hardware Specialist",
        "id": "Spesialis Sistem Komputer & Hardware"
      },
      "period": {
        "en": "Jan 2019 – Present",
        "id": "Jan 2019 – Sekarang"
      },
      "drawerTitle": {
        "en": "Hardware Diagnostics, OS Deployment & Equipment Refurbishment",
        "id": "Diagnostik Hardware, Instalasi OS & Perbaikan Perangkat"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Hardware Diagnostics & OS Deployment Operations",
          "tags": [
            "Hardware Repair",
            "OS Installation",
            "Diagnostics",
            "Device Refurbishment",
            "Troubleshooting"
          ],
          "problem": {
            "en": "End-users and small businesses needed reliable hardware repair, operating system troubleshooting, and thoroughly tested refurbished computing systems.",
            "id": "Kebutuhan perbaikan perangkat komputer, penanganan troubleshooting sistem operasi, dan penyiapan laptop refurbished yang siap pakai dan andal bagi pengguna."
          },
          "flow": [
            "Hardware Defect Diagnostics",
            "Component Repair & Upgrade",
            "Clean OS Installation & Config",
            "Driver & Performance Tuning",
            "Quality Assurance"
          ],
          "role": {
            "en": "Diagnosed and resolved hardware issues, conducted clean OS installations (Windows/Linux), repaired device components, and refurbished laptops with rigorous quality testing before client handover.",
            "id": "Memberikan layanan perbaikan hardware komputer, instalasi dan konfigurasi sistem operasi (Windows/Linux), serta penyiapan dan penjualan laptop bekas layak pakai dengan pengujian performa menyeluruh."
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
  "interviewChapters": [
    {
      "id": "story-stage-01",
      "stage": {
        "en": "STAGE 01 // GENESIS & PHILOSOPHY",
        "id": "STAGE 01 // GENESIS & FILOSOFI"
      },
      "sectionId": "about",
      "title": {
        "en": "01. Engineering Philosophy & Identity",
        "id": "01. Filosofi Rekayasa & Identitas Diri"
      },
      "cameraPos": [-1.4, 0.1, 6.8],
      "zoomFov": 42,
      "modelRotation": [0.15, 0.45, 0],
      "explosionFactor": 0.0,
      "lead": {
        "en": "6+ years of engineering experience across 5 financial institutions, grounded in rapid stack adaptability and robust fundamentals.",
        "id": "Pengalaman 6+ tahun merekayasa sistem perbankan dan finansial di 5 institusi, berlandaskan kecepatan adaptasi stack dan fundamental yang kuat."
      },
      "narrative": {
        "en": "Throughout my career, every company I joined utilized a different technology stack — from Java Spring Boot, Node.js, and PHP Laravel, to React.js and Golang. I don't confine myself to a single language; my core strength is how quickly I become productive in any ecosystem by applying transferable software engineering principles: Clean Architecture, resilient data workflows, database query tuning, and strict data accuracy. While I am comfortable managing features end-to-end, I currently choose to deepen Golang for high-concurrency banking systems.",
        "id": "Sepanjang perjalanan karier saya, tiap institusi yang saya masuki memakai stack teknologi yang berbeda — mulai dari Java Spring Boot, Node.js, PHP Laravel, hingga React.js dan Golang. Saya tidak membatasi diri pada satu bahasa tertentu; keunggulan utama saya adalah kecepatan adaptasi untuk langsung produktif di ekosistem mana pun melalui prinsip software engineering yang transferable: Clean Architecture, keandalan alur data, optimasi basis data, serta akurasi transaksi. Saya terbiasa mengelola fitur end-to-end, dengan fokus pendalaman saat ini pada Golang untuk sistem perbankan berkonkurensi tinggi."
      }
    },
    {
      "id": "story-stage-02",
      "stage": {
        "en": "STAGE 02 // TECHNICAL ARSENAL",
        "id": "STAGE 02 // GUDANG SENJATA TEKNIS"
      },
      "sectionId": "skill",
      "title": {
        "en": "02. Technical Arsenal & Stack Evolution",
        "id": "02. Gudang Senjata Teknis & Evolusi Stack"
      },
      "cameraPos": [1.4, 0.25, 4.8],
      "zoomFov": 32,
      "modelRotation": [0.3, 1.35, -0.1],
      "explosionFactor": 0.25,
      "lead": {
        "en": "A 5-pillar production-tested architecture engineered for zero data loss and resilient concurrency.",
        "id": "Arsitektur 5 pilar teruji di produksi untuk integritas data tanpa kompromi dan konkurensi tinggi."
      },
      "narrative": {
        "en": "My technical toolkit spans modern backend services (Golang with Fiber, GORM, gocron; Python; Node.js; PHP Laravel), frontend integration (React.js, TypeScript, Axios), relational databases (SQL Server, PostgreSQL, MySQL with stored procedures and indexing), containerization (Docker multi-stage, Kubernetes Helm), and secure integrations (FTP/SFTP, MinIO S3, AES/GPG file encryption).",
        "id": "Gudang senjata teknis saya mencakup pengembangan backend modern (Golang dengan Fiber, GORM, gocron; Python; Node.js; PHP Laravel), integrasi frontend (React.js, TypeScript, Axios), teknik basis data (SQL Server, PostgreSQL, MySQL dengan stored procedure dan strategic indexing), kontainerisasi (Docker multi-stage, Kubernetes Helm), serta integrasi aman (FTP/SFTP, MinIO S3, enkripsi file AES/GPG)."
      }
    },
    {
      "id": "story-stage-03",
      "stage": {
        "en": "STAGE 03 // CORE BANKING & ATM",
        "id": "STAGE 03 // CORE BANKING & ATM"
      },
      "sectionId": "experience",
      "title": {
        "en": "03. Banking Systems & ATM Reconciliation",
        "id": "03. Sistem Perbankan & Rekonsiliasi ATM"
      },
      "cameraPos": [-1.5, 0.2, 4.4],
      "zoomFov": 30,
      "modelRotation": [-0.15, 2.6, 0.1],
      "explosionFactor": 1.0,
      "lead": {
        "en": "ProrRekonATM web migration at OCBC NISP, AS400 core banking query checks, and IMHOTS 8,000+ ATM fleet monitoring at Hitachi.",
        "id": "Migrasi web ProrRekonATM di OCBC NISP, pengecekan query AS400, dan monitoring armada 8.000+ ATM di Hitachi."
      },
      "narrative": {
        "en": "At <b>OCBC NISP</b>, I re-architected the internal procedural desktop tool into <b>ProrRekonATM Web</b> using React.js and Golang REST APIs with PostgreSQL. To resolve billing discrepancies, I regularly ran query cross-checks directly against the <b>AS400 core banking</b> system and conducted physical testing on ATM hardware. At <b>Hitachi Channel Solutions</b>, I developed and maintained the <b>IMHOTS</b> web platform and EJ Dashboard monitoring 8,000+ ATMs across multiple banks, optimized MySQL queries via indexing and temporary tables, built Excel-to-SQL automation miniscripts, and configured client servers with auto-start daemon recovery.",
        "id": "Di <b>OCBC NISP</b>, saya mendesain ulang aplikasi desktop prosedural menjadi <b>ProrRekonATM Web</b> berbasis React.js dan REST API Golang dengan PostgreSQL. Untuk menelusuri selisih penagihan billing, saya rutin melakukan pengecekan query langsung ke sistem <b>core banking AS400</b> serta melakukan uji fisik pada mesin ATM. Di <b>Hitachi Channel Solutions</b>, saya mengembangkan platform web <b>IMHOTS</b> dan EJ Dashboard untuk monitoring armada 8.000+ mesin ATM lintas bank, mengoptimasi query MySQL dengan indexing dan temporary table, membuat miniscript konversi Excel ke SQL, serta menyiapkan server klien dengan fitur auto-start daemon recovery."
      }
    },
    {
      "id": "story-stage-04",
      "stage": {
        "en": "STAGE 04 // DISTRIBUTED PIPELINES",
        "id": "STAGE 04 // PIPELINE & MICROSERVICE"
      },
      "sectionId": "experience",
      "title": {
        "en": "04. High-Throughput Pipelines & Background Schedulers",
        "id": "04. Pipeline Throughput Tinggi & Background Scheduler"
      },
      "cameraPos": [1.5, -0.2, 5.2],
      "zoomFov": 36,
      "modelRotation": [0.25, 3.9, -0.1],
      "explosionFactor": 0.75,
      "lead": {
        "en": "13+ automated Golang schedulers at BRI, legacy SSIS modernization, and multi-threaded Python AES/GPG encryption.",
        "id": "13+ scheduler Golang otomatis di BRI, modernisasi SSIS legacy, dan enkripsi file klien via Python AES/GPG."
      },
      "narrative": {
        "en": "At <b>Bank Rakyat Indonesia (BRI)</b>, I engineered <b>13+ modular background schedulers</b> for BRIVA processing — including centralized activity logging (sch-log-activity-briva), FTP parameter synchronization with MinIO S3, batch file generation, and transaction data updates. I built <b>sch-parse-file-merah-putih</b> from scratch in Golang using Clean Architecture to replace 3 legacy SSIS DTSX packages, preserving 100% of business logic while enabling containerized processing. In parallel, I developed a multi-threaded Python scheduler for AES and GPG encryption/decryption of ATM settlement files with automated retry handling.",
        "id": "Di <b>Bank Rakyat Indonesia (BRI)</b>, saya membangun <b>13+ background scheduler modular</b> untuk operasional BRIVA — mencakup logging terpusat (sch-log-activity-briva), sinkronisasi parameter FTP/SFTP ke MinIO S3, batch file generation, dan update data transaksi. Saya membangun service <b>sch-parse-file-merah-putih</b> dari nol menggunakan Golang dengan Clean Architecture untuk menggantikan 3 package SSIS DTSX warisan, mempertahankan 100% logika bisnis seraya beralih ke container dan MinIO. Saya juga mengembangkan scheduler Python multi-threaded untuk enkripsi/dekripsi file settlement ATM klien via cipher AES dan GPG dengan mekanisme retry otomatis."
      }
    },
    {
      "id": "story-stage-05",
      "stage": {
        "en": "STAGE 05 // CREDENTIALS & CONTACT",
        "id": "STAGE 05 // FONDASI AKADEMIK & KONTAK"
      },
      "sectionId": "education",
      "title": {
        "en": "05. Academic Rigor & Engineering Collaboration",
        "id": "05. Fondasi Akademik & Inisiasi Kolaborasi"
      },
      "cameraPos": [-1.3, 0, 7.2],
      "zoomFov": 45,
      "modelRotation": [0.1, 6.28, 0],
      "explosionFactor": 0.0,
      "lead": {
        "en": "Universitas Mercu Buana GPA 3.71 (Cum Laude) • Open for High-Impact Software Engineering Roles.",
        "id": "Universitas Mercu Buana IPK 3.71 (Cum Laude) • Terbuka untuk Peran Rekayasa Perangkat Lunak Strategis."
      },
      "narrative": {
        "en": "I hold a Bachelor's degree in Information Systems from <b>Universitas Mercu Buana</b> with a <b>3.71 GPA (Cum Laude)</b>, reinforced by full-stack training at <b>Code Academy</b> and early hands-on hardware troubleshooting since 2019. I bring grounded technical maturity, high accountability, and proven enterprise delivery. I am ready for immediate deployment in remote or hybrid Jakarta engineering roles.",
        "id": "Saya lulusan S1 Sistem Informasi dari <b>Universitas Mercu Buana</b> dengan predikat <b>Cum Laude (IPK 3.71)</b>, diperkuat pelatihan intensif full-stack di <b>Code Academy</b> dan pengalaman awal perbaikan hardware sejak 2019. Saya membawa kedewasaan teknis yang teruji, akuntabilitas tinggi, dan rekam jejak delivery enterprise nyata. Saya siap berkontribusi langsung untuk peran software engineering remote maupun hybrid di Jakarta."
      }
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
