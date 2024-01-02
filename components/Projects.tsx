import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  // Define your props here
};

function Projects({ }: Props) {
  
  return ( 
    <div className="h-screen relative flex overflow-hidden flex-col text-left ad:flex-row max-w-full
     justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
     
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory mt-10 z-20">
        
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen">
          <img className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/uberdata.png?raw=true"  />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#000080]">
                <Link href="https://github.com/PratikGhawate/uber-etl-pipeline-dataengineering-project"> Uber Analytics: Building ETL Pipeline for Advanced Insights
                </Link>
              </span>
              <p className="text-xl text-center md:text-left p-5 font-normal style='color: #333333'">
              The Uber ETL pipeline data engineering project employs a diverse tech stack including GCP Storage, Python, Mage Data Pipeline Tool, BigQuery, and Looker Studio to analyze Uber&apos;s extensive dataset. Extracting data to GCP Storage initiates the process, followed by Python-driven transformations for cleaning and structuring. BigQuery facilitates robust analytics, while Looker Studio visualizes insights via interactive dashboards. The Mage Data Pipeline Tool orchestrates the ETL process, ensuring integrity and scalability, ultimately empowering Uber&apos;s decision-makers with actionable insights for informed strategic decisions.
              </p>
            </h4>
          </div>
        </div>



        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen">
          <img className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/olist.png?raw=true" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#000080]">
                <Link href="https://github.com/PratikGhawate/">Enhancing E-commerce: Predictive Modeling & Churn Classification
                </Link>
              </span>
              <p className="text-xl text-center md:text-left p-5 font-normal style='color: #333333'">
              The project extensively explores e-commerce operations via predictive modeling and churn classification techniques, utilizing the comprehensive Olist Store dataset with 100,000 orders from Brazilian marketplaces. Through feature engineering and deploying Random Forest, Logistic Regression, and Decision Trees, notable results are achieved. The Random Forest model excels with remarkable accuracy and an impressive AUC score of 0.7296. These findings provide pivotal insights for strategic decision-making, guiding sales optimization, improved customer retention strategies, and informed expansion within e-commerce.            
              </p>
              </h4>
          </div>
        </div>




        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen">
          <img className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/Machinelearnin.png?raw=true" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#000080]">
                <Link href="https://github.com/PratikGhawate/Cancer-Tumor-Diagnosis-Machine-Learning"> Cancer Tumor Diagnosis with Machine Learning 🩺📊
            Link  </Link>
              </span>
              <p className="text-xl text-center md:text-left p-5 font-normal style='color: #333333'">
              The project harnesses machine learning to discern between benign and malignant breast tumors using a Kaggle dataset of 570 tumor observations and 30 variables. The qualitative response underwent transformation for quantitative modeling. Employing GLM, Naive Bayesian, Decision Tree, Pruned Tree, and Random Forest models, it pinpointed critical features. The Random Forest model excelled in accuracy, highlighting four pivotal tumor classification attributes. This approach shows promise in refining cancer diagnostic methodologies for improved treatment strategies.              </p>
            </h4>
          </div>
        </div>



        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen">
          <img className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/airquality.png?raw=true" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#000080]">
                <Link href="https://github.com/PratikGhawate/AQI-LosAngeles-Trend-Analysis"> Air Quality Trend Analysis - Los Angeles 🌆
                </Link>
              </span>
              <p className="text-xl text-center md:text-left p-5 font-normal style='color: #333333'">
              Analyzing AQI Trends in Los Angeles Long Beach (2000-2010): This report delves into the dynamic shifts of air quality, spotlighting pivotal events that shaped AQI. From legislative reforms to economic fluctuations and environmental crises like wildfires, each influenced the AQI trajectory. Leveraging Kaggle data, robust modeling unveiled seasonal patterns and identified key drivers. The selected ARIMAxSARIMA model forecasted a declining AQI, emphasizing the need for sustained efforts to improve regional air quality.              </p>
            </h4>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen">
          <img className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/filecloud.png?raw=true" />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#000080]">
                <Link href="https://github.com/PratikGhawate/AQI-LosAngeles-Trend-Analysis"> File Cloud: Secure File Sharing System Deployment on AWS 🛡️
                </Link>
              </span>
              <p className="text-xl text-center md:text-left p-5 font-normal style='color: #333333'">
              The project details deploying File Cloud on AWS EC2 with S3 storage integration. It guides setting up, configuring, and integrating File Cloud with secure S3 storage, enhancing data management. Steps include EC2 instance creation, File Cloud installation, IAM user setup for S3 access, S3 bucket creation, and seamless File Cloud-S3 integration. Emphasizing security, it underscores AWS best practices, ensuring robust, scalable, and secure cloud file storage.              </p>
            </h4>
          </div>
        </div>












        
        
        
        








      </div>
      <div className="w-full absolute top-[30%] bg-[#cbb07b] opacity-20 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
export default Projects;