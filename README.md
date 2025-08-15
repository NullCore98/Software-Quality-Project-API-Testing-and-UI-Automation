# **Software Quality Project: API Testing and UI Automation**

This repository contains the complete solution to a Software Quality challenge. It is divided into two main sections: one for API testing and another for UI automation.

### **1\. Introduction**

The objective of this project was to validate the critical functionalities of an online store. To this end, different methodologies were applied, including API testing and UI automation.

### **2\. Project Structure**

The main repository, **PruebaTecnica-QualityControlEngineer**, is organized as follows:

/PruebaTecnica-QualityControlEngineer  
├── /API-testing  
│   ├── /functional-test-yourStore  
│   │   ├── (Postman Collection and Newman report)  
│   └── /performance-test-yourStore  
│       ├── /load-test/  
│       │   └── (JMeter files and reports)  
│       └── /stress-test/  
│           └── (JMeter files and reports)  
├── /Automation-webUI  
│   ├── /pageObjects/  
│   ├── /playwright-report/  
│   ├── /test-results/  
│   ├── /tests/  
│   ├── package.json  
│   └── playwright.config.js  
└── README.md (This file)

* **Postman & Newman**: For functional testing.

**Apache JMeter**: For load and stress testing.

### **3\. Part 1: API Testing**

This section contains the artifacts for testing the [Fake Store](https://fakestoreapi.com/docs) API.

#### **Tools Used**

#### **Software Requirements**

* For functional testing, you need Postman or Newman.  
* For performance testing, you need Apache JMeter.

### **4\. Part 2: UI Automation**

This section contains the test automation for the [OpenCart](https://opencart.abstracta.us) website.

#### **Tools Used**

* **Node.js**: JavaScript runtime environment.  
* **Playwright**: Automation framework.  
* **JavaScript**: Programming language.

#### **How to Clone and Run the Project**

1. **Clone the repository**:  
   git clone https://github.com/your-username/your-repository.git  
   cd PruebaTecnica-QualityControlEngineer/Automation-webUI

2. **Install dependencies**:  
   npm install

3. **Run the tests**:  
   npx playwright test

#### **View Evidence and Report**

* The test reports and execution videos are located in the playwright-report/ and test-results/ folders.  
*   
* To view the interactive HTML report, open the playwright-report/index.html file in your browser.