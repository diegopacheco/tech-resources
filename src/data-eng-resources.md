# Data Resources

## Tech

* Terraform / OpenTofu
* AWS S3
* AWS Security Groups
* AWS Auto Scaling Groups
* AWS AMI / Packer
* AWS EC2
* AWS RDS
* AWS ELB / ALB
* AWS Route 53
* K8s / EKS
* Helm
* ArgoCD
* Jenkins / Groovy DSL
* Trivy / tfsec / Checkov / Terrascan / TFLint / KubeLinter
* Java
* Spring Boot 
* Python 3x
* Postgress
* MySQL
* Redis
* Kafka
* Airflow
* Prometheus
* Grafana
* ELK
* Splunk 
* Druid
* Presto
* Trino
* AWS Redshift
* Apache Spark
* Apache Flink
* Apache Beam
* Apache Kafka
* Kafka Streams
* KSQLDB
* Apache Pulsar
* Hadoop ecosystem (HDFS, MapReduce, Hive)
* JVM Tunning
* GC Tunning
* Linux Tunning
* K8s Tunning
* Database Tunning
* AWS VPC Flow
* Cloud Trail
* Cloud Watch
* OpenSearch / ElasticSearch
* Storage formats:
    * Parquet
    * Avro
    * ORC
    * JSON
    * Iceberg
    * Delta Lake
* Luigi
* Apache NiFi
* DDD
* Data Mash
* Snowflake

## Data Techniques

* ETL vs ELT patterns
* Stream processing and windowing
* Change data capture (CDC)
* Data partitioning and sharding
* Batch vs real-time processing strategies
* Data federation vs data virtualization
* API-first data integration
* Event-driven architecture patterns
* Master data management (MDM)
* Data replication strategies (sync vs async)
* Columnar storage formats (Parquet, ORC)
* Data compression techniques
* Indexing strategies for analytics
* Query optimization and execution planning
* Caching layers and materialized views
* Schema-on-read vs schema-on-write
* Data denormalization for analytics
* Slowly changing dimensions (SCD) handling
* Data aggregation and rollup strategies
* Time-series data processing patterns
* Event sourcing patterns
* Complex event processing (CEP)
* Stream-stream and stream-table joins
* Watermarking for late-arriving data
* Backpressure handling in streaming systems

### Data Engineering Code Challenges Round 1

1. Create an Airflow DAG that extracts data from PostgreSQL, transforms it with Spark, and loads to Redshift. Include data quality checks and error handling.
2. Build a real-time streaming pipeline using Kafka, Spark Structured Streaming, and Delta Lake. Process IoT sensor data with windowing and aggregations.
3. Create a dbt project with dimensional modeling (fact/dimension tables), tests, documentation, and CI/CD pipeline deployment to Snowflake.
4. Build a Docker Compose setup with Kafka, Spark, PostgreSQL, and Jupyter. Create a complete data pipeline that processes sample e-commerce data.
5. Create Terraform scripts to deploy: S3 data lake with proper partitioning, Glue catalog, Glue ETL job, Lambda for data validation, and IAM roles.
6. Build a Python data pipeline using Pandas that reads from multiple CSV sources, performs data cleaning/validation, and outputs to both PostgreSQL and Parquet files.
7. Create a real-time CDC pipeline using Debezium, Kafka Connect, and Elasticsearch. Capture changes from MySQL and make them searchable in near real-time.

### Data Engineering Code Challenges Round 2

1. Build a serverless data pipeline using AWS Lambda, Step Functions, and S3. Process JSON files, transform with Pandas, and load to DynamoDB.
2. Create a Kubernetes operator in Go that automatically provisions Spark clusters and manages data processing jobs based on custom resource definitions.
3. Build a data quality monitoring system using Great Expectations, deployed on Kubernetes with alerts to Slack when data quality issues are detected.
4. Create a multi-tenant data platform using Apache Iceberg tables with row-level security, deployed on EKS with Trino for querying.
5. Build a feature store using Feast, deployed on Kubernetes, with both batch and real-time feature serving for ML pipelines.
6. Create a data lineage tracking system using Apache Atlas or DataHub, integrated with Airflow and dbt to automatically track data dependencies.
7. Deploy a complete lakehouse architecture using Delta Lake on S3, with Spark on EKS, Hive Metastore, and Superset for visualization. Include data governance, performance tuning, and cost optimization.

### Data Engineering Code Challenges Round 3

1. Create a data mesh implementation with domain-specific data products, each with their own CI/CD, data contracts, and SLA monitoring.
2. Build a real-time fraud detection pipeline using Kafka Streams, feature engineering with time windows, and model serving with MLflow on Kubernetes.
3. Create a data observability platform using OpenTelemetry, Grafana, and Prometheus to monitor data pipelines, including latency, throughput, and error rates.
4. Build a data archiving solution using Apache Pulsar for event streaming, with automatic tiered storage to S3 Glacier for cold data.
5. Create a data catalog with automated metadata extraction from various data sources (databases, files, APIs) using Apache Nifi and store in Apache Atlas.
6. Build a real-time recommendation engine using Apache Flink, integrating with Kafka for user events and serving recommendations via a REST API.
7. Create a data governance framework with Apache Ranger for access control, Apache Atlas for metadata management, and integration with dbt for data lineage tracking.

## Books

* [Principles of Software Architecture Modernization](https://www.amazon.com/Principles-Software-Architecture-Modernization-microservices/dp/9355519532/ref=sr_1_1?crid=7U3H2IE5U7Y4&dib=eyJ2IjoiMSJ9.ebHg7EIiJ3GThIg8Dwf4PelC70iUIbHPKv7_7zk8vrk8K2FB4zlrUQyNZwKAHPO46cAYR5z2-KyqnXqNz3Ee2lmU-aGR7NLhq7jko2UihHIl-taoJ6i_hkMjcc12ZF3pOmB9lFrvbsGgbDagq1Vzqg.oz7TxYpSBxBZjVjkuIPDZM7Wxx_XMRU0Uj7jo9Rq_BI&dib_tag=se&keywords=principles+of+software+architecture+modernization&qid=1741069169&sprefix=Principles+of+software+a%2Caps%2C190&sr=8-1)
* [Continuous Modernization](https://www.amazon.com/dp/9365893100/ref=mes-dp?_encoding=UTF8&pd_rd_w=JpyYV&content-id=amzn1.sym.7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_p=7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_r=K6XYEHZZ76RWDSAXAY5X&pd_rd_wg=RH04x&pd_rd_r=f230b2e4-c342-429e-a362-c856e4c2362a)
* [The DevOps Handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations-ebook/dp/B09G2GS39R/ref=sr_1_1?crid=J23TSXDWR7AM&dib=eyJ2IjoiMSJ9.BbT6bWxtWqrPrx5gjOFUQrir5DUFD3frbmNM4-TIgCgu7QQdHpvkRcTVLq-KCHoBd21RdaNno96McVcd6zUcLthYoK876oJ6hmrrFLbj7GN8sIiA68CHhuprmzWNNpWlqA2T9-jjZwpBKjRmsH3LFbC-79sprFMOsyPazKri411fXeqTpYRaamhxn-DBNo04um0VmXl9o0QMtz42aFucjO29sWnuU--140TGTeiBlIg.RyNzNroqthJ6l9FmhH7oS673BYWDexv5DGhD9b79aJA&dib_tag=se&keywords=The+DevOps+Handbook&qid=1741070019&s=digital-text&sprefix=the+devops+handbook%2Cdigital-text%2C277&sr=1-1)
* [The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B0DPNL8863/ref=sr_1_1?crid=8G1NX5OK9ZIQ&dib=eyJ2IjoiMSJ9.wiWwt0G1guUdWgnsFDK6nal3hO4lijRYOrOZfxfZaTf-HsNtCwXfO0hOBZUDlRS-L3sZoZD6u38qiy4wNQG-r0IxV3OlrPNaI-RcyykMuXEhQpxAYAyXAj8mwQ5Qmf3CTD7oTeRiXViOI1PYkBSKQWWF3DThfHMwlGTMZR2GPTD7RYBf4FlSBzgtY_eJ3S5yjpzeCm5otrZAs2BqBnZ0c30lZ2UwUNVkNMXDh8lB9yY.IbPxgZbiFXccbFSFHnbyCw50DQ-Vcww7I-rzEw9g48g&dib_tag=se&keywords=The+Phoenix+Project&qid=1741070029&s=digital-text&sprefix=the+phoenix+project%2Cdigital-text%2C151&sr=1-1)
* [Accelerate](https://www.amazon.com/dp/B07B9F83WM/ref=mes-dp?_encoding=UTF8&pd_rd_w=4jGOM&content-id=amzn1.sym.7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_p=7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_r=GEB389BF3C27YR5FQ0QG&pd_rd_wg=vF6D5&pd_rd_r=653af9cc-a71b-4679-8b56-a416b943275b)
* [Refactoring Databases: Evolutionary Database Design](https://www.amazon.com/Refactoring-Databases-Evolutionary-Addison-Wesley-Signature-ebook/dp/B0DHY617PD/ref=sr_1_2?crid=1QNITR8ADX418&dib=eyJ2IjoiMSJ9.Mgmjte1N_iknsu2Xw0EdQJuZfe5t9RUUL4SNkdTNtqwZvXwdVSNvPaeO5ubNOEjVXGmD9YSBsY6zSX1bZMgnv3mjudEOKRsBR-En3oG3ojT3px51KJzJcfruJGBRx_0NDkh7yajOmKk0mB7AyDLIcLm5ivIYvmlW-Cy458LFLF1kRJ5ifGDFO7FiPAZ-3skwXCAXE0ZzhhA_cH__DHgRjFyFK5uN7SOoRwg_vM4s9KW6HrY3zCs7dmjMwjvCYe-qDEPxrCYrUfwQPIGMHYDpthyhdkeBM2LiTGaoc3O2GlY.OJIGcek6--srp3ttBg1SQShUWg9C4cakqJfnKGxX8H0&dib_tag=se&keywords=database+refactoring&qid=1741070303&s=digital-text&sprefix=database+refacrtoring%2Cdigital-text%2C145&sr=1-2)
* [Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable-ebook/dp/B06XPJML5D/ref=sr_1_1?crid=JFZ55X89JHP0&dib=eyJ2IjoiMSJ9.ScUjfrRSlTSXTtLBuC0DXSaGKqlDdMwB7RFFyk_gcKP4jt2pDMT94khvobsJMaNq72IkRPo9wTbaQXjmL-9KfbpZU10rAql-hnEAhaVPGb1S7byM4yRclet2dUkElNuJQZwvdaYhfa3-tcK8V2RwXHXroiDjncQeyWoZaiexa5KGJUKYK4VHd-zHeNdg7bVGWQtHGl1Wb4hqD_yw6YBcfun24Dkt_PHxfXbyNdfj7c4.zD0O-vfQNqa5amOI6UnYqbGp-6RNl1NuJo5hBbgLSJ4&dib_tag=se&keywords=Data+Intensive+Applications&qid=1741665534&sprefix=data+intensive+applications%2Caps%2C213&sr=8-1)
* [Fundamentals of Data Engineering: Plan and Build Robust Data Systems](https://www.amazon.com/Fundamentals-Data-Engineering-Joe-Reis-ebook/dp/B0B4VH4T37/ref=sr_1_6?crid=AYEO5IK8AMA8&dib=eyJ2IjoiMSJ9.1FSa9Rq2vhmdm3SwSDlUmNo5G8pYO9O71yfY1A2QqirKcUOrQFD1h3vlYk4B7NkwGQ7o1s1nkOMs75tL2bX9fQ9kIFrAs0HrT4F6qVeLEld9AjIbgEaa5y3T35hdDUyKvoADgW8J5y81ukKsfHlEpj36A-0uv7SBjcy0VXn1f2TqVviFYt8KwaxHF3ioXqTeeDhvUcmyc84dc9KZasdIpOvq3fFUGyYpUeAsp5pnELXK_w1RGejWtVcq1ffmHBpRgp0cpOwOolOo8AHHF2McVygiiVoI1j1Z6NQdJ1_xPIs.fBYNZoi3NCm6Eo9-Madb03lW-8oCKdwlbkvH_fZPLeE&dib_tag=se&keywords=data+engineering&qid=1754267717&sprefix=data+engineerin%2Caps%2C217&sr=8-6)
* [Data Engineering Design Patterns: Recipes for Solving the Most Common Data Engineering Problems](https://www.amazon.com/Data-Engineering-Design-Patterns-Problems-ebook/dp/B0F513GT2R/ref=sr_1_7?crid=AYEO5IK8AMA8&dib=eyJ2IjoiMSJ9.1FSa9Rq2vhmdm3SwSDlUmNo5G8pYO9O71yfY1A2QqirKcUOrQFD1h3vlYk4B7NkwGQ7o1s1nkOMs75tL2bX9fQ9kIFrAs0HrT4F6qVeLEld9AjIbgEaa5y3T35hdDUyKvoADgW8J5y81ukKsfHlEpj36A-0uv7SBjcy0VXn1f2TqVviFYt8KwaxHF3ioXqTeeDhvUcmyc84dc9KZasdIpOvq3fFUGyYpUeAsp5pnELXK_w1RGejWtVcq1ffmHBpRgp0cpOwOolOo8AHHF2McVygiiVoI1j1Z6NQdJ1_xPIs.fBYNZoi3NCm6Eo9-Madb03lW-8oCKdwlbkvH_fZPLeE&dib_tag=se&keywords=data+engineering&qid=1754267717&sprefix=data+engineerin%2Caps%2C217&sr=8-7)
* [Data Pipelines Pocket Reference: Moving and Processing Data for Analytics](https://www.amazon.com/Data-Pipelines-Pocket-Reference-Processing/dp/1492087831/ref=sr_1_10?crid=AYEO5IK8AMA8&dib=eyJ2IjoiMSJ9.1FSa9Rq2vhmdm3SwSDlUmNo5G8pYO9O71yfY1A2QqirKcUOrQFD1h3vlYk4B7NkwGQ7o1s1nkOMs75tL2bX9fQ9kIFrAs0HrT4F6qVeLEld9AjIbgEaa5y3T35hdDUyKvoADgW8J5y81ukKsfHlEpj36A-0uv7SBjcy0VXn1f2TqVviFYt8KwaxHF3ioXqTeeDhvUcmyc84dc9KZasdIpOvq3fFUGyYpUeAsp5pnELXK_w1RGejWtVcq1ffmHBpRgp0cpOwOolOo8AHHF2McVygiiVoI1j1Z6NQdJ1_xPIs.fBYNZoi3NCm6Eo9-Madb03lW-8oCKdwlbkvH_fZPLeE&dib_tag=se&keywords=data+engineering&qid=1754267717&sprefix=data+engineerin%2Caps%2C217&sr=8-10)
* [Financial Data Engineering: Design and Build Data-Driven Financial Products](https://www.amazon.com/Financial-Data-Engineering-Data-Driven-Products/dp/1098159993/ref=sr_1_17?crid=AYEO5IK8AMA8&dib=eyJ2IjoiMSJ9.1FSa9Rq2vhmdm3SwSDlUmNo5G8pYO9O71yfY1A2QqirKcUOrQFD1h3vlYk4B7NkwGQ7o1s1nkOMs75tL2bX9fQ9kIFrAs0HrT4F6qVeLEld9AjIbgEaa5y3T35hdDUyKvoADgW8J5y81ukKsfHlEpj36A-0uv7SBjcy0VXn1f2TqVviFYt8KwaxHF3ioXqTeeDhvUcmyc84dc9KZasdIpOvq3fFUGyYpUeAsp5pnELXK_w1RGejWtVcq1ffmHBpRgp0cpOwOolOo8AHHF2McVygiiVoI1j1Z6NQdJ1_xPIs.fBYNZoi3NCm6Eo9-Madb03lW-8oCKdwlbkvH_fZPLeE&dib_tag=se&keywords=data+engineering&qid=1754267717&sprefix=data+engineerin%2Caps%2C217&sr=8-17)
* [Spark: The Definitive Guide: Big Data Processing Made Simple](https://www.amazon.com/Spark-Definitive-Guide-Processing-Simple/dp/1491912219/ref=sr_1_2?crid=30F7SXWERJWBV&dib=eyJ2IjoiMSJ9.ydfjg0lAL91nWE1RcWbpyu2GpsWULp9TJu3ZEdYzqrcjjJxj-x9mv9iWdQubwr6-PB71Pfxkndu5RShuqJY3lC-gIO4VSd2bTBJffMOhGhNKi--E4dcL2JYK-WNO2OejOORw7GDAPIouk7thW9u_vE6t5ncZAikZWuIzd2yR2zyUZw_7jgKGYev6CmPzthVPElpoZAK4S1i3TmeTu5baJ615LeS6EZNcH0wmpZsydng.tVEF8MiSu8HB57raihHei46PW1PuWT7kKYAcBi1FTSE&dib_tag=se&keywords=data+engineering+spark&qid=1754267926&sprefix=data+engineering+spark%2Caps%2C205&sr=8-2)
* [Learning Spark: Lightning-Fast Data Analytics](https://www.amazon.com/Learning-Spark-Jules-Damji/dp/1492050040/ref=sr_1_4?crid=30F7SXWERJWBV&dib=eyJ2IjoiMSJ9.ydfjg0lAL91nWE1RcWbpyu2GpsWULp9TJu3ZEdYzqrcjjJxj-x9mv9iWdQubwr6-PB71Pfxkndu5RShuqJY3lC-gIO4VSd2bTBJffMOhGhNKi--E4dcL2JYK-WNO2OejOORw7GDAPIouk7thW9u_vE6t5ncZAikZWuIzd2yR2zyUZw_7jgKGYev6CmPzthVPElpoZAK4S1i3TmeTu5baJ615LeS6EZNcH0wmpZsydng.tVEF8MiSu8HB57raihHei46PW1PuWT7kKYAcBi1FTSE&dib_tag=se&keywords=data+engineering+spark&qid=1754267926&sprefix=data+engineering+spark%2Caps%2C205&sr=8-4)
* [Stream Processing with Apache Flink: Fundamentals, Implementation, and Operation of Streaming Applications](https://www.amazon.com/Stream-Processing-Apache-Flink-Implementation/dp/149197429X/ref=sr_1_1?crid=V4C6Q6LIKT3Q&dib=eyJ2IjoiMSJ9.7xxznqUFEt8uvJimQfGgKQ8TNk-kp8B2f5bz7B9Jov-I74vd2PDOaAnigzARp21uE2IoYV2vrHRjiAv_oAstZNmMsNA9Z3qJnjgu86PVv_8NNpXYrkb_XxcoT9N5Y5ENS-qK9oRaqI-yZ6DxE_9qYuGFd4vz9LNfbTmKINPCzQAyJCL566frmJt5p2dN3310prmVa-6JyMKNtfS7Bu6NsvUCV8PqQOSQpkBd9NkDUd8.zHoiC3v9D6BmbVN7TyaqO1wCD_2di93Odq5X7eNi-Z4&dib_tag=se&keywords=data+engineering+flink&qid=1754267949&sprefix=data+engineering+flink%2Caps%2C254&sr=8-1)
* [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.amazon.com/Streaming-Systems-Where-Large-Scale-Processing/dp/1491983876/ref=sr_1_5?crid=V4C6Q6LIKT3Q&dib=eyJ2IjoiMSJ9.7xxznqUFEt8uvJimQfGgKQ8TNk-kp8B2f5bz7B9Jov-I74vd2PDOaAnigzARp21uE2IoYV2vrHRjiAv_oAstZNmMsNA9Z3qJnjgu86PVv_8NNpXYrkb_XxcoT9N5Y5ENS-qK9oRaqI-yZ6DxE_9qYuGFd4vz9LNfbTmKINPCzQAyJCL566frmJt5p2dN3310prmVa-6JyMKNtfS7Bu6NsvUCV8PqQOSQpkBd9NkDUd8.zHoiC3v9D6BmbVN7TyaqO1wCD_2di93Odq5X7eNi-Z4&dib_tag=se&keywords=data+engineering+flink&qid=1754267949&sprefix=data+engineering+flink%2Caps%2C254&sr=8-5)
