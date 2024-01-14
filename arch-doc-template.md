# 🧬 Template

This is a template created by Diego Pacheco which the goal to better describe a tought process which is called architecture. This should be used to learn software architecture and to pratice with use cases.

## 🏛️ Structure

### 1. 🎯 Problem Statement and Context

What is the problem? What is the context of the problem?
Example:
```
The problem is to sell shoes online, the main issue with buying shoes online is 
how we will make our users buy shoes if they cannot make them fit? We would need
to have a huge selectio and find ways to people find they perpect show at the 
same time market teams would need to change campains all the time, we need to
have way to make things fast and dynamic.
```

### 2. 🎯 Goals

List in form of bullets what goals do have. Here it's great to have 5-10 lines.
Example:
```
1. Solution needs to be fast! Performance for all operations bellow ~1 ms.
2. Security is non-negociable! Security at-rest, transite, threat analysis and review for by at least 3 different people.
3. Composable solution. Users should be able to mix and match components instead of building all for scratch. ie: map component can be reused on counters component.
4. Work offline: Re-consiliation, CRDTs are a must.
5. Cloud-Native: All backend must be 100% cloud native, using open-source and should and should be cloud-agnostic, avoid propretaty apis.
```

### 3. 🎯 Non-Goals

List in form of bullets what non-goals do have. Here it's great to have 5-10 lines.
Example:
```
1. Be perfect: There will be mistakes, we dont want have automatic-rollback for everything.
2. DynamoDB: Dynamo is expensive, we want be away from the DB.
3. Serverless: Serverless has high latency, we do not want to use it.
4. Mobile-native: We want have one single codebase, therefore we will not have 2 mobile code bases(ios and android) thefore be native is not a goal.
5. ...
```
Recommended Reading: http://diego-pacheco.blogspot.com/2021/01/requirements-are-dangerous.html

### 📐 3. Principles

List in form of bullets what design principles you want to be followed, it's great to have 5-10 lines.
Example:
```
1. Low Coupling: We need to watch for coupling all times.
2. Flexibility: Users should be able to customize behavior without leaking the internals of the system. Leverage interfaces.
3. Observability: we should expose all key metrics on main features. Sucess and errors counters need to be exposed.
4. Testability: Chaos engineering is a must and property testing. Testing should be done by engineers all times.
5. Cache efficiency: Should leverage SSD caches and all forms of caches as much as possible.
```
Recommended Reading: http://diego-pacheco.blogspot.com/2018/01/stability-principles.html

### 🏗️ 4. Overall Diagrams

Here there will be a bunch of diagrams, to understand the solution.
```
🗂️ 4.1 Overall architecture: Show the big picture, relationship between macro components.
🗂️ 4.2 Deployment: Show the infra in a big picture. 
🗂️ 4.3 Use Cases: Make 1 macro use case diagram that list the main capability that needs to be covered. 
```
Recommended Reading: http://diego-pacheco.blogspot.com/2020/10/uml-hidden-gems.html

### 🧭 5. Trade-offs

List the tradeoffs analysis, comparing pros and cons for each major decision.
example:
```
1. React Native vs (Flutter and Native)
2. Serverless vs Microservices
3. Redis vs Enbeded Caches
```
Each tradeoff line need to be:
```
PROS (+) 
  * Benefit: Explanation that justify why the benefit is true.
CONS (+)
  * Problem: Explanation that justify why the problem is true.
```
PS: Be careful to not confuse problem with explanation. 
<BR/>Recommended reading: http://diego-pacheco.blogspot.com/2023/07/tradeoffs.html

### 🌏 6. For each key major component

What is a majore component? A service, a lambda, a important ui, a generalized approach for all uis, a generazid approach for computing a workload, etc...
```
6.1 - Class Diagram           : classic uml diagram with attributes and methods
6.2 - Contract Documentation  : Operations, Inputs and Outputs
6.3 - Persistence Model       : Diagrams, Table structure, partiotioning, main queries.
6.4 - Algorithms/Data Structures : Spesific algos that need to be used, along size with spesific data structures.     
```
Recommended Reading: http://diego-pacheco.blogspot.com/2018/05/internal-system-design-forgotten.html