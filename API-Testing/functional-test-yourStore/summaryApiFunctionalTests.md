Summary of API Functional Tests

All functional tests for the "Your Store" API were executed successfully, with a 100% pass rate as verified by the Newman HTML report. The test suite was designed to rigorously validate not only the core functionality but also the API's behavior in various negative and edge-case scenarios.
The tests were conducted using Postman and Newman for generating comprehensive HTML reports. The test cases covered the following key areas:

Happy Path Scenarios:
•	Listing Products by Category: The test for retrieving products belonging to the "electronics" category passed with a 200 OK response. The test also validated that all products in response indeed had the "electronics" category and that the response schema was correct.
•	Retrieving a Specific Product: The test to retrieve a specific product passed, with a 200 OK response.
•	Creating a New Product: The test for creating a new product was executed and passed successfully with a 201 Created response.
•	Updating a Product's Image: The test for updating an image on a product was executed and passed, with a 200 OK response.

Negative and Edge-Case Scenarios: The API was thoroughly tested to understand its behavior under non-standard conditions, revealing several key findings:
•	Method Handling: The API's proxy layer exhibits specific and sometimes non-standard behavior for unsupported HTTP methods, such as a 403 Forbidden for HEAD requests and a 404 Not Found for PATCH requests.
•	Path Case Sensitivity: The API surprisingly ignores case in its endpoint paths, as a request to /products/CATEGORY/electronics functioned identically to the standard endpoint.
•	Non-existent IDs: A request for a non-existent product ID returned a 200 OK with an empty JSON object {}, a notable deviation from the expected 404 Not Found response.
•	Data and Security Validation: The API demonstrated robust security against a simple SQL injection attempt, correctly rejecting the malicious input. It also correctly returned a 400 Bad Request for malformed requests, such as sending a string in a field that requires a number.

The overall test run had a total of 43 requests and 111 assertions, with no failed or skipped tests. The average response time for all requests was 225 milliseconds.
 

