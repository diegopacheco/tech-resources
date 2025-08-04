# Security & InfoSec Resources

## Important Topics

* CIA Triad (Confidentiality, Integrity, Availability) -> https://en.wikipedia.org/wiki/Information_security#Key_concepts
* Defense in Depth -> https://en.wikipedia.org/wiki/Defense_in_depth_(computing)
* Zero Trust Architecture -> https://en.wikipedia.org/wiki/Zero_trust_security_model
* Threat Modeling -> https://en.wikipedia.org/wiki/Threat_model
* Risk Assessment -> https://en.wikipedia.org/wiki/Risk_assessment
* Incident Response -> https://en.wikipedia.org/wiki/Computer_security_incident_management
* Vulnerability Management -> https://en.wikipedia.org/wiki/Vulnerability_management
* Security by Design -> https://en.wikipedia.org/wiki/Secure_by_design
* Least Privilege Principle -> https://en.wikipedia.org/wiki/Principle_of_least_privilege
* Security Operations Center (SOC) -> https://en.wikipedia.org/wiki/Information_security_operations_center
* Digital Forensics -> https://en.wikipedia.org/wiki/Digital_forensics
* Social Engineering -> https://en.wikipedia.org/wiki/Social_engineering_(security)

## Security Frameworks & Standards

* NIST Cybersecurity Framework -> https://www.nist.gov/cyberframework
* ISO 27001/27002 -> https://www.iso.org/isoiec-27001-information-security.html
* CIS Controls -> https://www.cisecurity.org/controls/
* OWASP Top 10 -> https://owasp.org/www-project-top-ten/
* SANS Top 25 -> https://www.sans.org/top25-software-errors/
* MITRE ATT&CK -> https://attack.mitre.org/
* PCI DSS -> https://www.pcisecuritystandards.org/
* SOX Compliance -> https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
* GDPR -> https://gdpr.eu/
* HIPAA -> https://www.hhs.gov/hipaa/index.html

## Penetration Testing Tools

### Network Scanning & Enumeration

* Nmap -> https://nmap.org/
* Masscan -> https://github.com/robertdavidgraham/masscan
* Zmap -> https://zmap.io/
* Netcat -> https://nc110.sourceforge.io/
* Wireshark -> https://www.wireshark.org/
* Tcpdump -> https://www.tcpdump.org/

### Web Application Testing

* Burp Suite -> https://portswigger.net/burp
* OWASP ZAP -> https://www.zaproxy.org/
* Nikto -> https://cirt.net/Nikto2
* SQLmap -> https://sqlmap.org/
* Gobuster -> https://github.com/OJ/gobuster
* Dirb -> https://dirb.sourceforge.net/

### Exploitation Frameworks

* Metasploit -> https://www.metasploit.com/
* Cobalt Strike -> https://www.cobaltstrike.com/
* Empire -> https://github.com/EmpireProject/Empire
* Powershell Empire -> https://github.com/PowerShellEmpire/PowerShellEmpire
* Covenant -> https://github.com/cobbr/Covenant

### Wireless Security

* Aircrack-ng -> https://www.aircrack-ng.org/
* Kismet -> https://www.kismetwireless.net/
* Wifite -> https://github.com/derv82/wifite2
* Reaver -> https://github.com/t6x/reaver-wps-fork-t6x

### Social Engineering

* SET (Social Engineer Toolkit) -> https://github.com/trustedsec/social-engineer-toolkit
* Gophish -> https://getgophish.com/
* King Phisher -> https://github.com/rsmusllp/king-phisher

## Security Monitoring & SIEM

### SIEM Platforms

* Splunk -> https://www.splunk.com/
* IBM QRadar -> https://www.ibm.com/products/qradar-siem
* ArcSight -> https://www.microfocus.com/en-us/products/siem-security-information-event-management
* LogRhythm -> https://logrhythm.com/
* Elastic Security -> https://www.elastic.co/security/
* Wazuh -> https://wazuh.com/

### Network Monitoring

* Nagios -> https://www.nagios.org/
* Zabbix -> https://www.zabbix.com/
* PRTG -> https://www.paessler.com/prtg
* SolarWinds -> https://www.solarwinds.com/
* Pandora FMS -> https://pandorafms.org/

### Threat Intelligence

* MISP -> https://www.misp-project.org/
* OpenCTI -> https://www.opencti.io/
* YARA -> https://virustotal.github.io/yara/
* Sigma -> https://github.com/SigmaHQ/sigma
* Suricata -> https://suricata.io/

## Vulnerability Management

### Vulnerability Scanners

* Nessus -> https://www.tenable.com/products/nessus
* OpenVAS -> https://www.openvas.org/
* Qualys VMDR -> https://www.qualys.com/apps/vulnerability-management/
* Rapid7 Nexpose -> https://www.rapid7.com/products/nexpose/
* Greenbone -> https://www.greenbone.net/

### Static Code Analysis

* SonarQube -> https://www.sonarqube.org/
* Checkmarx -> https://checkmarx.com/
* Veracode -> https://www.veracode.com/
* Fortify -> https://www.microfocus.com/en-us/products/static-code-analysis-sast
* Bandit (Python) -> https://bandit.readthedocs.io/
* ESLint Security -> https://github.com/nodesecurity/eslint-plugin-security

### Container Security

* Trivy -> https://trivy.dev/
* Clair -> https://github.com/quay/clair
* Anchore -> https://anchore.com/
* Twistlock -> https://www.paloaltonetworks.com/prisma/cloud
* Aqua Security -> https://www.aquasec.com/

## Cloud Security

### AWS Security

* AWS Config -> https://aws.amazon.com/config/
* AWS CloudTrail -> https://aws.amazon.com/cloudtrail/
* AWS GuardDuty -> https://aws.amazon.com/guardduty/
* AWS Security Hub -> https://aws.amazon.com/security-hub/
* AWS Inspector -> https://aws.amazon.com/inspector/

### Multi-Cloud Security

* Prisma Cloud -> https://www.paloaltonetworks.com/prisma/cloud
* CloudSploit -> https://cloudsploit.com/
* ScoutSuite -> https://github.com/nccgroup/ScoutSuite

## Cryptography & PKI

### Cryptographic Libraries

* OpenSSL -> https://www.openssl.org/
* Bouncy Castle -> https://www.bouncycastle.org/
* libsodium -> https://libsodium.gitbook.io/
* Crypto++ -> https://www.cryptopp.com/

### PKI Tools

* EJBCA -> https://www.ejbca.org/
* OpenCA -> https://www.openca.org/
* HashiCorp Vault -> https://www.vaultproject.io/
* Let's Encrypt -> https://letsencrypt.org/

## Security Challenges Round 1

* (1) Build a Vulnerability Scanner that can identify common web application vulnerabilities (SQL injection, XSS, CSRF) with custom payloads and reporting.
* (2) Create a Network Intrusion Detection System (NIDS) that can monitor network traffic and detect suspicious activities using signature and anomaly-based detection.
* (3) Build a Log Analysis System that can parse security logs from multiple sources, correlate events, and generate alerts for potential security incidents.
* (4) Create a Password Security Audit Tool that can check password strength, detect common passwords, and implement secure password policies.
* (5) Build a Phishing Detection System that can analyze emails and websites to identify phishing attempts using machine learning and heuristic analysis.
* (6) Create a File Integrity Monitoring System that can detect unauthorized changes to critical system files and configurations.
* (7) Build a Security Information Dashboard that aggregates security metrics from multiple tools and provides real-time security posture visibility.

## Security Challenges Round 2

* (1) Create a Threat Hunting Platform that can proactively search for advanced persistent threats (APTs) using behavioral analysis and threat intelligence.
* (2) Build a Zero Trust Network Access (ZTNA) System with identity verification, device compliance checking, and micro-segmentation capabilities.
* (3) Create an Automated Incident Response System that can contain threats, collect forensic evidence, and orchestrate response workflows.
* (4) Build a Cloud Security Posture Management (CSPM) tool that can assess cloud configurations against security best practices and compliance requirements.
* (5) Create a Deception Technology Platform with honeypots, honeynets, and decoy systems to detect and analyze attacker behavior.
* (6) Build a Security Orchestration, Automation and Response (SOAR) platform that can automate security workflows and integrate multiple security tools.
* (7) Create a Digital Forensics Investigation System that can acquire, preserve, analyze, and report on digital evidence from various sources.

## Security Challenges Round 3

* (1) Build a Machine Learning-based User and Entity Behavior Analytics (UEBA) system that can detect insider threats and compromised accounts.
* (2) Create a Threat Intelligence Platform that can collect, analyze, and share threat indicators across multiple organizations with automated enrichment.
* (3) Build a Secure Software Development Lifecycle (SSDLC) Platform with automated security testing, code analysis, and compliance checking.
* (4) Create a Privacy-Preserving Data Analytics System using techniques like differential privacy, homomorphic encryption, and secure multi-party computation.
* (5) Build a Quantum-Safe Cryptography Implementation that can protect against future quantum computing threats with post-quantum algorithms.
* (6) Create a Security Awareness Training Platform with phishing simulations, interactive content, and behavioral change measurement.
* (7) Build a Cyber Threat Intelligence Sharing Platform that enables real-time threat information exchange between organizations while preserving anonymity.

## Books

* Principles of Software Architecture Modernization https://www.amazon.com/Principles-Software-Architecture-Modernization-microservices/dp/9355519532/ref=sr_1_1?crid=7U3H2IE5U7Y4&dib=eyJ2IjoiMSJ9.ebHg7EIiJ3GThIg8Dwf4PelC70iUIbHPKv7_7zk8vrk8K2FB4zlrUQyNZwKAHPO46cAYR5z2-KyqnXqNz3Ee2lmU-aGR7NLhq7jko2UihHIl-taoJ6i_hkMjcc12ZF3pOmB9lFrvbsGgbDagq1Vzqg.oz7TxYpSBxBZjVjkuIPDZM7Wxx_XMRU0Uj7jo9Rq_BI&dib_tag=se&keywords=principles+of+software+architecture+modernization&qid=1741069169&sprefix=Principles+of+software+a%2Caps%2C190&sr=8-1
* Continuous Modernization https://www.amazon.com/dp/9365893100/ref=mes-dp?_encoding=UTF8&pd_rd_w=JpyYV&content-id=amzn1.sym.7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_p=7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_r=K6XYEHZZ76RWDSAXAY5X&pd_rd_wg=RH04x&pd_rd_r=f230b2e4-c342-429e-a362-c856e4c2362a
* The Web Application Hacker's Handbook https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470/
* Hacking: The Art of Exploitation https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/
* The Shellcoder's Handbook https://www.amazon.com/Shellcoders-Handbook-Discovering-Exploiting-Security/dp/047008023X/
* Black Hat Python https://www.amazon.com/Black-Hat-Python-Programming-Pentesters/dp/1593275900/
* Gray Hat Hacking: The Ethical Hacker's Handbook https://www.amazon.com/Gray-Hat-Hacking-Ethical-Handbook/dp/0071832386/
* The Tangled Web: A Guide to Securing Modern Web Applications https://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/
* Security Engineering: A Guide to Building Dependable Distributed Systems https://www.amazon.com/Security-Engineering-Building-Dependable-Distributed/dp/0470068523/
* Applied Cryptography https://www.amazon.com/Applied-Cryptography-Protocols-Algorithms-Source/dp/1119096723/
* Cryptography Engineering https://www.amazon.com/Cryptography-Engineering-Principles-Practical-Applications/dp/0470474246/
* The Art of Memory Forensics https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/
* Malware Analyst's Cookbook https://www.amazon.com/Malware-Analysts-Cookbook-DVD-Techniques/dp/0470613033/
* Practical Malware Analysis https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901/
* Network Security Assessment https://www.amazon.com/Network-Security-Assessment-Know-Your/dp/149191095X/
* The Practice of Network Security Monitoring https://www.amazon.com/Practice-Network-Security-Monitoring-Understanding/dp/1593275099/
* Blue Team Handbook: Incident Response Edition https://www.amazon.com/Blue-Team-Handbook-condensed-Responder/dp/1091493898/
* Red Team Development and Operations https://www.amazon.com/Red-Team-Development-Operations-practical/dp/B083XVG633/
* Social Engineering: The Art of Human Hacking https://www.amazon.com/Social-Engineering-Art-Human-Hacking/dp/0470639539/
* The Cuckoo's Egg https://www.amazon.com/Cuckoos-Egg-Tracking-Computer-Espionage/dp/1416507787/
* Ghost in the Wires https://www.amazon.com/Ghost-Wires-Adventures-Worlds-Wanted/dp/0316037729/
* Countdown to Zero Day https://www.amazon.com/Countdown-Zero-Day-Stuxnet-Digital/dp/0770436193/
* The Phoenix Project https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B0DPNL8863/ref=sr_1_1?crid=8G1NX5OK9ZIQ&dib=eyJ2IjoiMSJ9.wiWwt0G1guUdWgnsFDK6nal3hO4lijRYOrOZfxfZaTf-HsNtCwXfO0hOBZUDlRS-L3sZoZD6u38qiy4wNQG-r0IxV3OlrPNaI-RcyykMuXEhQpxAYAyXAj8mwQ5Qmf3CTD7oTeRiXViOI1PYkBSKQWWF3DThfHMwlGTMZR2GPTD7RYBf4FlSBzgtY_eJ3S5yjpzeCm5otrZAs2BqBnZ0c30lZ2UwUNVkNMXDh8lB9yY.IbPxgZbiFXccbFSFHnbyCw50DQ-Vcww7I-rzEw9g48g&dib_tag=se&keywords=The+Phoenix+Project&qid=1741070029&s=digital-text&sprefix=the+phoenix+project%2Cdigital-text%2C151&sr=1-1
* CISSP All-in-One Exam Guide https://www.amazon.com/CISSP-All-One-Exam-Guide/dp/1260142655/
* Security+ Guide to Network Security Fundamentals https://www.amazon.com/Security-Guide-Network-Security-Fundamentals/dp/1337288780/

## Links

* OWASP -> https://owasp.org/
* SANS Institute -> https://www.sans.org/
* NIST Cybersecurity -> https://www.nist.gov/cybersecurity
* CVE Database -> https://cve.mitre.org/
* Exploit Database -> https://www.exploit-db.com/
* SecurityFocus -> https://www.securityfocus.com/
* Krebs on Security -> https://krebsonsecurity.com/
* Dark Reading -> https://www.darkreading.com/
* Threatpost -> https://threatpost.com/
* The Hacker News -> https://thehackernews.com/
* Cybersecurity & Infrastructure Security Agency -> https://www.cisa.gov/
* US-CERT -> https://us-cert.cisa.gov/
* FIRST -> https://www.first.org/
* ISACA -> https://www.isaca.org/
* (ISC)² -> https://isc2.org/
* CompTIA Security+ -> https://www.comptia.org/certifications/security
* CISSP -> https://www.isc2.org/Certifications/CISSP
* CISM -> https://www.isaca.org/credentialing/cism
* CEH -> https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/
* OSCP -> https://www.offensive-security.com/pwk-oscp/
* CISSP Study Guide -> https://www.cybrary.it/course/cissp/
* Cybrary -> https://www.cybrary.it/
* Coursera Cybersecurity -> https://www.coursera.org/specializations/cyber-security
* edX Cybersecurity -> https://www.edx.org/learn/cybersecurity
* SANS Training -> https://www.sans.org/cyber-security-courses/
* Infosec Institute -> https://www.infosecinstitute.com/
* Udemy Security Courses -> https://www.udemy.com/topic/cyber-security/
* Pluralsight Security -> https://www.pluralsight.com/browse/information-cyber-security