# Diego Pacheco's QA Manifesto

## Summary

```
1. QA is a engineer
2. Automation is a MUST
3. Pass rate matters the most
4. Test Coverage needs to increase every release
5. Do not ignore errors, Errors are not normal
6. Leverage Open Source
7. Observability is a MUST
8. QA Read Code and Debug Code
9. QA Leverage SOA
10. QA is good writter
```

## 1. QA is a engineer

There is no QA without engineering. QAs needs to learn algorithims, data structures, porper engineering. </br>
QA MUST do POCs, read books, debug code, read code, write code, and always improve everyday.

## 2. Automation is a MUST

All tests MUST be automated. Manual tests should not be performed to validate and sign releases. </br>
IF manual tests are being done, we have a big unaceptable performance problem. 

## 3. Pass rate matters the most

The tests need to be passing all times. No test should be ignored or commented out. We either FIX the tests or we DELETE them.

### 4. Test Coverage needs to increase every release

All releases, we need to add more coverage. QA must add testing diversitry(unit tests, integration tests, E2E, Chaos Testing, Performance Testing, Security Testing, Snapsohot Testing, PropertyBased Testing, Fuzzy, Mutation Tests, smoke and Stress Testing. etc...).
Releases should be tracked in a excel to managed how many automation tests we have, the number should be growing. </br>

### 5. Do not ignore errors, Errors are not normal

In a centralized log solution like ELK, Splunk, SumoLogic, etc... Errors and Exceptions MUST be monitored. </br>
Do not use not cluases to ignore errors, total number of errors/exceptions must be reducing every single release. </br>
The number of Exceptions and Errors must be ZERO.

### 6. Leverage Open Source

QA must use open source, it should be away from proprietary/closed source solutions.QA MUST use the same open source tools as engineers, for instance JUnit for testing in Java.

### 7. Observability is a MUST

QA also knows how things are working in production. QA need to have proper dashboards, help engineers to intrument the systems. </br>
QA does pair programing with engineers, help improve metrics and understanding of the system in production. We should use metrics not only logs.

### 8. QA Read Code and Debug Code

QA is a hacker, reads and understand what the code does. QA does not ping engineers with "Quick Call". QA demands more quality helping others to setup high bar standards and make sure code is testable. QA default strategy is push for Testing Interfaces(creates testing endpoints in all services).

### 9. QA Leverage SOA

QA works with engineers to have proper contract definitions, up to front, so test can happen in parallel. QA works with engineers to have proper feature flags and leverage CI/CD. QA Does not deploy his branches on shared env. QA demands engineers have isolation, and helps engineers to create proper tests with high levels of isolation.

### 10. QA is good writter

QA writes detailed bug reports, with lots of context(screen shoots, centralized log links, how to proper reproduce bugs). QA does not blame engineers, QA write proper and detailed wiki documentation, and explain how things works and create diagrams with images, steps and explanations. QA focus on automation with documentation.