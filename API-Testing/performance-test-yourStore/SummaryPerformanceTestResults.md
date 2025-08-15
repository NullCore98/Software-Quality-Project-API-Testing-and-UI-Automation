Perfomance results api: "Your Store"
load and stress tests were conducted using Apache JMeter

Load test summary:
No Errors: The API handled the simulated load with a perfect 0% error rate.
Fast Response Times: The average response time was very low, at approximately 226 milliseconds.
High Throughput: The API was able to handle a high volume of requests, with a throughput of over 580 requests per second.
Performance Validation: This test confirms that the API performs optimally and meets its performance requirements under the expected load of 150 concurrent users.

Stress test summary:
Errors: The API experienced a total of 104 errors, resulting in a low error rate of 0.0289%. This indicates that while the system was under significant stress, it was still mostly stable.
Response Times: The average response time was approximately 1.22 seconds (1219 ms). This is a clear increase, indicating performance degradation under stress. The maximum response time was extremely high at over 105 seconds (105,808 ms), which is a critical finding as it shows that some requests completely stalled.
Throughput: The API was able to handle a very high throughput of over 610 requests per second. This demonstrates that the system has a high capacity and can process a large volume of requests before reaching its breaking point.
Point of Failure: The test was successful in identifying the API's point of failure, where response times began to degrade significantly and errors started to appear. This is the primary objective of a stress test.




