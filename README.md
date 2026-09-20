# RESQ-GeoIntel 🚨

### Intelligent Hazard-Based Relocation Decision Support System

**Smart India Hackathon 2026 · Problem Statement SIH26191 · Team Datheon**

[🌐 **Live Prototype**](https://resq-geointel.vercel.app/) · [💻 **Source Code**](https://github.com/ganeshsharma247/resq-geointel)

---

## Executive Overview

**RESQ-GeoIntel transforms hazard information into an explainable relocation decision.**

During a disaster, identifying a hazardous zone is only the beginning. Authorities must determine **who is exposed, where they can be relocated, whether those sites have sufficient capacity, how affected populations should be distributed, and which routes minimize hazard exposure**.

RESQ-GeoIntel connects these decisions into a **single, continuous geospatial decision-support workflow**.

> **Risk → Exposure → Relocation → Capacity → Allocation → Routing**

The platform is designed around **decision continuity and explainability over black-box automation**. Major recommendations are supported by visible factors, assumptions, constraints, and decision logic..

---

# 1. The Problem

During a disaster, identifying a red zone is only the first step.

Operational authorities must answer a connected set of questions:

* **Which habitations are exposed?**
* **How many people are affected?**
* **Which vulnerable groups require priority attention?**
* **Which relocation sites are comparatively safer?**
* **Can those sites accommodate the affected population?**
* **How should people be distributed across multiple sites?**
* **Which evacuation route minimizes hazard exposure?**
* **What evidence supports the recommendation?**

These decisions are often handled as separate analytical tasks.

### RESQ-GeoIntel addresses this gap by connecting them into one decision pipeline.

---

# 2. Unified Solution Pipeline

```text
                    HAZARD IDENTIFICATION
                            │
                            ▼
                     RED-ZONE MAPPING
                            │
                            ▼
              POPULATION & VULNERABILITY
                      EXPOSURE
                            │
                            ▼
                SAFE-SITE ASSESSMENT
                            │
                            ▼
                 CAPACITY VALIDATION
                            │
                            ▼
                MULTI-SITE ALLOCATION
                            │
                            ▼
                 HAZARD-AWARE ROUTING
                            │
                            ▼
              AUTHORITY DECISION SUPPORT
```

## Decision Continuity

Each stage produces information required by the next stage.

**Hazard** determines **exposure**.
**Exposure** determines the **relocation requirement**.
**Relocation requirements** are evaluated against **site safety and capacity**.
**Feasible sites** determine **population allocation**.
**Allocated populations** require **safe routing**.

This creates a continuous decision chain rather than a collection of disconnected dashboards.

---

# 3. Unified Solution

RESQ-GeoIntel combines:

* **Geospatial risk assessment**
* **Population exposure analysis**
* **Vulnerability assessment**
* **Relocation-site evaluation**
* **Capacity validation**
* **Multi-site population allocation**
* **Hazard-aware routing**
* **Evidence-driven explainability**
* **Low-connectivity operational concepts**

into a unified authority-facing decision-support interface.

---

# 4. Technical Capabilities

## 4.1 🔴 Risk & Red-Zone Intelligence

The platform represents hazard-related indicators as an explainable risk layer and visualizes high-risk areas through an interactive geospatial interface.

Authorities can inspect individual habitations and view the factors contributing to their risk classification.

### Output

**Risk classification + spatial visualization + factor-level explanation**

The objective is not merely to display a red zone, but to make the classification **interpretable and actionable**.

---

## 4.2 👥 Population & Vulnerability Exposure

Risk becomes operationally meaningful when it is connected to the population exposed to it.

RESQ-GeoIntel represents habitation-level exposure through:

* **Total population**
* **Households**
* **Children**
* **Elderly population**
* **Other vulnerable groups**

This changes the operational question from:

> **Where is the hazard?**

to:

> **Who is exposed, at what scale, and what relocation requirement does that create?**

---

## 4.3 📍 Safe-Site Assessment

Candidate relocation sites are evaluated using multiple decision factors:

* **Distance from affected habitation**
* **Accessibility**
* **Hazard exposure**
* **Available facilities**
* **Road connectivity**

The objective is to avoid selecting a relocation site using a single criterion such as proximity.

A site must be considered in the context of **safety, accessibility, infrastructure, and operational feasibility**.

---

## 4.4 🏕️ Capacity Validation

Geographic safety alone does not make a relocation site feasible.

The Capacity Engine evaluates whether a candidate site can accommodate the assigned population using **Sphere-based humanitarian planning constraints represented in the prototype**.

The system exposes capacity assumptions rather than presenting capacity as an unexplained number.

> **Prototype scope:** Sphere-based planning constraints are demonstrated for decision-support purposes. The prototype does not claim official Sphere certification or compliance.

---

## 4.5 ⚖️ Multi-Site Population Allocation

A single relocation site may not be sufficient for the entire affected population.

RESQ-GeoIntel therefore demonstrates **multi-site allocation**, distributing affected populations across feasible sites.

### Demonstration Scenario

| Relocation Site | Allocated Population |
| --------------- | -------------------: |
| **Site Alpha**  |                2,000 |
| **Site Beta**   |                2,500 |
| **Site Gamma**  |                2,000 |
| **Total**       |            **6,500** |
| **Remaining**   |                **0** |

The allocation interface also demonstrates recalculation against site constraints.

### Decision Objective

**Distribute the affected population across feasible sites while maintaining consistency with site-level constraints.**

---

## 4.6 🛣️ Hazard-Aware Routing

Traditional shortest-path routing does not necessarily produce the safest evacuation route.

RESQ-GeoIntel incorporates mapped hazard zones into the routing decision.

### Demonstration

**Origin:** H-17
**Destination:** SITE-BETA

| Metric          | Recommended Route |
| --------------- | ----------------: |
| Distance        |        **8.4 km** |
| Travel Time     |        **18 min** |
| Hazard Exposure |           **Low** |
| Status          |          **Safe** |

The prototype also presents an alternative shortest-path route that is rejected when it crosses a mapped high-risk zone.

### Design Principle

> **Shortest path ≠ safest path.**

The routing layer demonstrates the transition from **distance-based navigation** to **hazard-aware evacuation planning**.

---

# 5. Explainability Over Black-Box AI

For government and emergency-management applications, a recommendation should not appear as an unexplained model output.

RESQ-GeoIntel therefore includes an **Evidence & Assumptions** layer exposing:

* Data sources
* Risk factors
* Model weights
* Capacity assumptions
* Decision logic
* Prototype limitations
* Human-review considerations

### Explainability Objective

An authority user should be able to understand:

**What was recommended → Why it was recommended → Which constraints influenced it → What assumptions were used**

This supports **human-in-the-loop decision-making** rather than replacing authorized operational judgment.

---

# 6. System Architecture

## Current Prototype Architecture

```text
                         AUTHORITY USER
                              │
                              ▼
                  ┌───────────────────────┐
                  │   RESQ-GeoIntel UI    │
                  │      React + Vite     │
                  └───────────┬───────────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
       Risk Analysis    Site Assessment     Routing
             │                │                │
             └────────────────┼────────────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │ Decision-Support      │
                  │ Dashboard             │
                  └───────────────────────┘
```

The current implementation is a **front-end SIH prototype** using a centralized mock dataset to maintain consistency across the complete workflow.

---

# 7. Production-Scale Architecture

The prototype is structured around a modular decision pipeline so that production data and backend services can be integrated without fundamentally changing the authority-facing workflow.

```text
 Satellite / GIS / Rainfall / Terrain / Population
                         │
                         ▼
                    DATA LAYER
                         │
                         ▼
              GEOSPATIAL PROCESSING
                         │
                         ▼
              RISK & EXPOSURE ENGINE
                         │
                         ▼
        SITE CAPACITY + ALLOCATION ENGINE
                         │
                         ▼
             HAZARD-AWARE ROUTING
                         │
                         ▼
              AUTHORITY DASHBOARD
```

### Potential Production Technology Stack

**Backend**

* FastAPI
* Python

**Geospatial Data**

* PostgreSQL
* PostGIS
* GIS / remote-sensing datasets

**Optimization & Routing**

* SciPy
* pgRouting
* Constraint-based optimization

**Data Sources**

* Authoritative government datasets
* Terrain/elevation data
* Rainfall/weather data
* Population datasets
* Road-network data
* Satellite/GIS information

These represent the proposed production direction, not capabilities claimed as live in the current prototype.

---

# 8. Technical Differentiator

## RESQ-GeoIntel is not just a hazard map.

Its primary technical differentiator is the **connected decision chain**:

```text
RISK
  ↓
EXPOSURE
  ↓
RELOCATION
  ↓
CAPACITY
  ↓
ALLOCATION
  ↓
ROUTING
```

Most importantly, the output of one stage becomes the decision context for the next.

This enables the system to move from:

> **“Which area is dangerous?”**

to:

> **“Who is exposed, where can they be relocated, can those sites accommodate them, how should they be distributed, and which route minimizes hazard exposure?”**

That is the core decision-support value of RESQ-GeoIntel.

---

# 9. Dashboard Modules

The prototype provides a unified authority-facing interface containing:

```text
Landing
   │
   └── Decision Dashboard
        ├── Overview
        ├── Risk Map
        ├── Exposure
        ├── Relocation Sites
        ├── Capacity Engine
        ├── Allocation
        ├── Routing
        ├── Evidence & Assumptions
        └── System Status
```

Each module represents a stage in the overall decision workflow rather than an isolated feature.

---

# 10. Low-Connectivity Operational Readiness

Disaster-response environments may operate under unreliable connectivity.

The prototype therefore demonstrates an **offline/online system-status concept** with cached-layer indicators.

The production vision is to support:

* Cached geospatial layers
* Offline maps
* Local decision context
* Field-worker updates
* Synchronization when connectivity is restored

The current implementation demonstrates the concept rather than providing a production offline emergency-response infrastructure.

---

# 11. Technology Stack

### Frontend

* **React 19**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **React-Leaflet**
* **Leaflet**
* **Recharts**
* **Lucide React**

### Mapping

Interactive geospatial visualization using **Leaflet + OpenStreetMap tiles**.

### Data Architecture

A centralized mock dataset is maintained through:

```text
src/data/mockData.js
```

This acts as the single source of truth for the demonstration scenario.

---

# 12. Prototype Data & Transparency

The current implementation is a **working SIH front-end prototype** using a consistent fictional/mock dataset.

It does **not** currently represent live government or disaster-management data.

The same habitation, relocation sites, population values, risk information, and allocation values are reused across the dashboard to maintain internal consistency.

### Example

```text
2,000 + 2,500 + 2,000 = 6,500
```

This ensures that the prototype demonstrates one coherent operational scenario rather than disconnected sample numbers.

### Important

The prototype should **not be interpreted as a live emergency-response system**.

A production deployment would require:

* Authoritative data sources
* Validated risk models
* Production backend services
* Real road-network data
* Real-time or regularly updated inputs
* Operational security
* Human validation and governance

---

# 13. Future Scale

RESQ-GeoIntel is designed as a foundation for progressive deployment rather than a closed prototype.

## Phase 1 — Demonstration

**Current**

* Interactive dashboard
* Risk visualization
* Exposure analysis
* Site assessment
* Capacity assessment
* Multi-site allocation
* Hazard-aware routing
* Explainability layer

## Phase 2 — Authoritative Data Integration

Integrate:

* Rainfall
* Terrain/elevation
* Population
* Road networks
* Weather
* Disaster alerts
* Satellite/GIS datasets

## Phase 3 — Advanced Decision Intelligence

Introduce:

* Dynamic risk scoring
* Multi-hazard assessment
* Temporal hazard modelling
* Advanced hazard prediction
* Constraint-based allocation
* Real road-network routing

## Phase 4 — Field Deployment

Extend the platform with:

* GPS-based navigation
* Offline maps
* Cached emergency datasets
* Field-worker updates
* Shelter occupancy updates
* Emergency communication workflows

## Phase 5 — Authority Integration

Integrate with authorized disaster-management workflows and operational systems while maintaining:

> **Explainability → Auditability → Human Oversight**

as core design principles.

---

# 14. Limitations

The current repository represents a **working SIH front-end prototype**, not a production emergency-response platform.

Current limitations include:

* **Mock geospatial data**
* **Simulated risk calculations**
* **Prototype capacity calculations**
* **Prototype allocation logic**
* **Demonstration routing logic**
* **Simulated offline status**
* **No live government-data integration**
* **No real-time emergency-alert infrastructure**

These limitations are explicit by design so that prototype functionality is not confused with production operational capability.

---

# 15. Governance & Safety Considerations

For real-world deployment:

* Recommendations should be validated by **authorized disaster-management personnel**.
* Data sources should be **authoritative, current, and traceable**.
* Risk classifications should support—not replace—professional emergency assessment.
* Population and location data should be protected according to applicable privacy and security requirements.
* Decision outputs should remain **auditable and explainable**.
* Human oversight should remain part of the operational decision loop.

---

# 16. SIH Demonstration Flow

A concise **2–4 minute technical demonstration** can follow this sequence:

### 01 — Overview

Introduce the affected habitation and priority situation.

### 02 — Risk Map

Show the hazard zone and explain the risk factors.

### 03 — Exposure

Demonstrate population and vulnerable-group exposure.

### 04 — Relocation Sites

Compare candidate relocation sites.

### 05 — Capacity Engine

Validate site-level capacity constraints.

### 06 — Allocation

Demonstrate:

```text
2,000 → Site Alpha
2,500 → Site Beta
2,000 → Site Gamma
```

### 07 — Routing

Generate the recommended hazard-aware route and contrast it with the rejected hazardous alternative.

### 08 — Evidence

Show the assumptions and reasoning behind the recommendation.

### 09 — System Status

Demonstrate the low-connectivity/offline concept.

---

# 17. Project Status

| Capability                 | Status          |
| -------------------------- | --------------- |
| Frontend Prototype         | ✅ Complete      |
| Interactive Dashboard      | ✅ Complete      |
| Risk Visualization         | ✅ Complete      |
| Exposure Analysis          | ✅ Complete      |
| Site Assessment            | ✅ Complete      |
| Capacity Engine            | ✅ Complete      |
| Multi-Site Allocation      | ✅ Complete      |
| Hazard-Aware Routing       | ✅ Complete      |
| Evidence & Assumptions     | ✅ Complete      |
| Offline Concept            | ✅ Demonstrated  |
| Public GitHub Repository   | ✅ Available     |
| Live Prototype             | ✅ Deployed      |
| Production Backend         | 🔄 Future Scope |
| Real-Time Data Integration | 🔄 Future Scope |

---

# 18. Team

## Team Datheon

**Smart India Hackathon 2026**

**Problem Statement:** SIH26191

**Project:** RESQ-GeoIntel

---

# 19. Closing Statement

## From Hazard Identification to Safer Relocation Decisions.

**RESQ-GeoIntel connects the complete decision chain:**

> **Identify the risk.**
> **Quantify the exposure.**
> **Find feasible relocation sites.**
> **Validate capacity.**
> **Allocate populations.**
> **Route them away from danger.**
> **Explain every decision.**

### **RESQ-GeoIntel — Decision Continuity for Disaster Response.**

