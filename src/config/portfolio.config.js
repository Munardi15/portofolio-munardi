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
      "en": "Over <b>7+ years</b> architecting mission-critical financial systems across <b>5 leading institutions</b>. Specializing in Golang, high-throughput bulk ingestion, Clean Architecture, and zero-downtime database optimization.",
      "id": "Lebih dari <b>7+ tahun</b> merekayasa sistem finansial berskala kritikal di <b>5 institusi keuangan terkemuka</b>. Spesialisasi dalam Golang, bulk ingestion throughput tinggi, Clean Architecture, dan optimasi database tanpa downtime."
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
      "en": "Solving core infrastructural problems with precision, architectural adaptability, and extreme accountability.",
      "id": "Memecahkan masalah infrastruktur inti dengan presisi, adaptabilitas arsitektural, dan akuntabilitas tinggi."
    },
    "narrative": {
      "en": "As a <b>Software Engineer</b>, I don't just write code — <span class=\"highlight\">I adapt.</span> Across 5 major financial companies, I've successfully engineered mission-critical systems, jumping seamlessly between <b>Golang, Python, PHP, Node.js, and Java</b>.<br><br>My strongest asset isn't mastering a single framework — it's my ability to learn any tech stack rapidly and deliver production-ready solutions regardless of the environment. From modernizing legacy SSIS workflows into Go-based cloud architectures to optimizing deep SQL bottlenecks, my focus is solving the core problem, not just writing syntax.",
      "id": "Sebagai seorang <b>Software Engineer</b>, saya tidak sekadar menulis kode — <span class=\"highlight\">saya beradaptasi.</span> Di 5 perusahaan finansial besar, saya sukses merekayasa sistem kritikal dengan melompat mulus antara <b>Golang, Python, PHP, Node.js, dan Java</b>.<br><br>Aset terkuat saya bukan hanya pada satu framework—melainkan kemampuan beradaptasi dan mempelajari tech stack apa pun dengan cepat untuk mengirimkan solusi siap-produksi di lingkungan mana pun. Mulai dari modernisasi sistem SSIS usang ke arsitektur cloud Golang hingga optimasi bottleneck SQL, fokus saya adalah memecahkan masalah inti, bukan sekadar menulis sintaks."
    },
    "badges": [
      "⚡ Core Banking Agility",
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
        "en": "ATM Fleet Monitoring & High-Speed Ingestion",
        "id": "Monitoring Aset ATM & Ingestion Cepat"
      },
      "projectCount": 2,
      "projects": [
        {
          "codeName": "IMHOTS & EJ Dashboard",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL"
          ],
          "problem": {
            "en": "Banking partners lacked unified monitoring of physical ATM terminal states and Electronic Journal (EJ) logs.",
            "id": "Klien bank tidak memiliki dashboard terpadu untuk memantau status aset ATM dan log transaksi Electronic Journal (EJ)."
          },
          "flow": [
            "Fetch ATM Logs",
            "Parse EJ Data",
            "Update MySQL",
            "Render Dashboard UI"
          ],
          "role": {
            "en": "Maintained, optimized, and engineered mission-critical dashboard features tailored for institutional bank clients.",
            "id": "Mengelola, mengoptimasi, dan mengimplementasi fitur kustom berdasarkan permintaan klien bank."
          }
        },
        {
          "codeName": "Database Optimization & Miniscripts",
          "tags": [
            "MySQL",
            "Python",
            "SQL Server"
          ],
          "problem": {
            "en": "Severe database latency caused by non-indexed queries and tedious manual Excel data ingestion.",
            "id": "Pemrosesan data sangat lambat dan proses input data operasional (via Excel) menyita terlalu banyak waktu."
          },
          "flow": [
            "Analyze Query Plans",
            "Implement Indexing",
            "Python Excel Bulk Ingestion"
          ],
          "role": {
            "en": "Optimized query execution plans via strategic indexing and engineered automated Python ingestion pipelines.",
            "id": "Mengoptimasi skema database (indexing) dan membangun script mini Python untuk otomatisasi insert massal."
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
        "en": "ATM Reconciliation Platform Migration",
        "id": "Migrasi Platform Rekonsiliasi ATM"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "ProrRekonATM Web Migration",
          "tags": [
            "React.js",
            "Golang",
            "PostgreSQL",
            "SQL Server"
          ],
          "problem": {
            "en": "Legacy desktop application for ATM reconciliation was sluggish, unmaintainable, and restricted to single OS environments.",
            "id": "Aplikasi desktop rekonsiliasi lama sangat kaku, lambat, dan tidak dapat diakses lintas platform."
          },
          "flow": [
            "React UI Request",
            "Axios",
            "Golang REST API",
            "SQL Stored Procedure",
            "JSON Response"
          ],
          "role": {
            "en": "Led complete end-to-end rewrite of ProrRekonATM from a legacy desktop app into a modern full-stack web architecture.",
            "id": "Mendesain ulang dan melakukan re-code menyeluruh pada ProrRekonATM dari aplikasi desktop menjadi platform web full-stack modern."
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
        "en": "Enterprise API Centralization",
        "id": "Sentralisasi API Perusahaan"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Backend API Services",
          "tags": [
            "PHP",
            "Laravel",
            "MySQL"
          ],
          "problem": {
            "en": "Disjointed internal business software required unified, authenticated API endpoints for central operations.",
            "id": "Membutuhkan sentralisasi API untuk mengintegrasikan berbagai aplikasi bisnis internal yang terpecah-pecah."
          },
          "flow": [
            "Receive Payload",
            "Validate Business Logic",
            "Execute DB Query",
            "Return JSON"
          ],
          "role": {
            "en": "Conducted technical systems analysis and implemented high-reliability REST API services.",
            "id": "Melakukan analisa sistem komprehensif dan membangun backend REST API untuk melayani kebutuhan bisnis."
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
        "en": "Insurance Policy Data Transformation",
        "id": "Transformasi Data Polis Asuransi"
      },
      "projectCount": 1,
      "projects": [
        {
          "codeName": "Core Backend System",
          "tags": [
            "Node.js",
            "Express.js",
            "SQL Server"
          ],
          "problem": {
            "en": "Raw insurance policy data models could not be consumed directly by client frontend interfaces.",
            "id": "Data asuransi mentah tidak bisa langsung dikonsumsi front-end tanpa transformasi logika bisnis yang kompleks."
          },
          "flow": [
            "Fetch Raw SQL",
            "Transform Model",
            "Expose Express API",
            "Frontend Display"
          ],
          "role": {
            "en": "Engineered backend service layer and designed highly secure, scalable relational schema models.",
            "id": "Mengembangkan sistem backend dan mendesain model data yang aman dan skalabel."
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
      "AES/GPG CIPHER ENCRYPTION",
      "MINIO S3 COMPLIANCE",
      "PROVEN PRODUCTION RESILIENCE",
      "5+ FINANCIAL INSTITUTIONS"
    ]
  }
};

export default portfolioConfig;
