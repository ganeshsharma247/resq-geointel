# RESQ-GeoIntel 🚨

### Intelligent Hazard-Based Relocation Decision Support System

**Smart India Hackathon 2026 · Problem Statement SIH26191 · Team Datheon**

[**🌐 Live Prototype**](https://resq-geointel.vercel.app) · [**💻 Source Code**](https://github.com/ganeshsharma247/resq-geointel)

---

## 🧭 Overview

**RESQ-GeoIntel** is an explainable geospatial decision-support platform designed to help disaster-management authorities identify hazardous habitations, assess vulnerable populations, evaluate safer relocation sites, allocate affected populations across feasible sites, and generate hazard-aware evacuation routes.

Instead of stopping at **hazard mapping**, RESQ-GeoIntel carries the decision workflow from:

```text
Hazard Identification
        ↓
Red-Zone Mapping
        ↓
Vulnerable Population Exposure
        ↓
Safe Relocation Site Identification
        ↓
Site Capacity Validation
        ↓
Multi-Site Population Allocation
        ↓
Hazard-Aware Routing
        ↓
Authority Decision Dashboard
```

The prototype demonstrates how multiple decision-support stages can be brought together into a single operational interface.

---

## 🎯 Problem Statement

During disasters, identifying a hazardous area is only the first step.

Authorities also need to answer:

* **Which habitations are at risk?**
* **How many people are exposed?**
* **Which vulnerable groups require priority attention?**
* **Where can affected populations be relocated safely?**
* **Can those locations accommodate the affected population?**
* **How should people be distributed across multiple sites?**
* **Which evacuation route minimizes hazard exposure?**
* **Why was a particular site or route recommended?**

RESQ-GeoIntel addresses these connected decisions through one explainable workflow.

---

## 💡 Proposed Solution

RESQ-GeoIntel combines geospatial risk assessment, population exposure analysis, relocation-site evaluation, capacity checking, population allocation, and hazard-aware routing into a unified decision-support dashboard.

### Core workflow

| Stage                        | What RESQ-GeoIntel does                                   |
| ---------------------------- | --------------------------------------------------------- |
| 🔴 **Risk Mapping**          | Identifies and visualizes hazard/red zones                |
| 👥 **Exposure Analysis**     | Quantifies population and vulnerable groups at risk       |
| 📍 **Site Assessment**       | Evaluates potential relocation sites                      |
| 🏕️ **Capacity Engine**      | Checks whether sites can accommodate affected populations |
| ⚖️ **Allocation**            | Distributes people across multiple feasible sites         |
| 🛣️ **Routing**              | Generates routes that avoid mapped hazard zones           |
| 🔎 **Explainability**        | Shows the factors and assumptions behind recommendations  |
| 📡 **Offline-First Concept** | Demonstrates low-connectivity operational readiness       |

---

# 🚀 Key Features

## 1. 🔴 Automated Red-Zone Mapping

The prototype combines hazard-related indicators into an explainable risk score and visualizes high-risk areas on an interactive map.

Users can inspect individual habitations and understand why an area has been classified as high-risk.

---

## 2. 🔎 Explainable Risk Assessment

Risk recommendations are not presented as a black box.

The dashboard exposes the contributing factors behind a habitation's risk score, helping authorities understand the reasoning behind the recommendation.

---

## 3. 👥 Vulnerable Population Exposure

The system provides exposure information at habitation level, including:

* Total population
* Households
* Children
* Elderly population
* Other vulnerable groups

This allows evacuation and relocation decisions to consider **who is exposed**, not only **where the hazard exists**.

---

## 4. 📍 Safe-Site Assessment

Candidate relocation sites are evaluated using multiple factors such as:

* Distance from affected habitation
* Accessibility
* Hazard exposure
* Available facilities
* Road connectivity

This helps identify locations that are more suitable for emergency relocation.

---

## 5. 🏕️ Sphere-Based Capacity Engine

The capacity module evaluates whether a candidate site can accommodate the assigned population using **Sphere-based humanitarian planning constraints** represented in the prototype.

The dashboard makes the capacity assumptions visible instead of treating the capacity value as an unexplained number.

> **Note:** The prototype demonstrates Sphere-based constraints; it does not represent official Sphere certification or compliance.

---

## 6. ⚖️ Multi-Site Population Allocation

Instead of assigning the entire affected population to a single shelter, RESQ-GeoIntel distributes people across multiple feasible relocation sites.

### Example demo allocation

```text
Affected Population: 6,500

Site Alpha  → 2,000
Site Beta   → 2,500
Site Gamma  → 2,000

Total       → 6,500
Remaining   → 0
```

The allocation interface also provides a recalculation interaction to demonstrate how the decision-support workflow can be updated against site constraints.

---

## 7. 🛣️ Hazard-Aware Routing

The routing module generates a relocation route while considering mapped hazard zones.

The prototype also displays an alternative shortest-path route that is rejected when it crosses a high-risk area.

### Demo example

```text
Origin       → H-17
Destination  → SITE-BETA

Recommended Route
Distance     → 8.4 km
Travel Time  → 18 min
Hazard       → Low
Status       → Safe
```

The system demonstrates that the shortest route is not necessarily the safest route.

---

## 8. 📚 Evidence & Assumptions

RESQ-GeoIntel provides an evidence-oriented section showing:

* Data sources
* Risk-model factors
* Model weights
* Capacity assumptions
* Decision logic
* Prototype limitations
* Human-review considerations

This improves transparency and makes the system's recommendations easier to interpret.

---

## 9. 📡 Offline-First / Low-Connectivity Concept

Disaster-response environments may have unreliable connectivity.

The prototype therefore demonstrates an **offline/online system-status concept** with cached-layer indicators to represent how a production system could continue supporting field operations under limited connectivity.

---

# 🖥️ Dashboard Modules

The prototype contains the following major sections:

```text
Landing
   │
   └── Dashboard
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

---

# 🧪 Prototype Data

The current website is a **front-end SIH demonstration prototype**.

It uses a consistent, self-contained **fictional/mock dataset** rather than live government or disaster-management data.

The same habitation, relocation sites, risk values, population figures, and allocation values are reused throughout the dashboard so that the numbers remain internally consistent.

For example:

```text
2,000 + 2,500 + 2,000 = 6,500
```

This ensures that different dashboard sections demonstrate the same underlying scenario rather than displaying unrelated sample numbers.

### Important

The prototype should **not** be interpreted as a live emergency-response system.

A production implementation would connect the interface to authoritative real-world data sources and backend decision engines.

---

# 🏗️ System Architecture

The current implementation is a frontend prototype designed so that a production backend can be integrated without fundamentally changing the dashboard structure.

### Prototype architecture

```text
                    ┌───────────────────────┐
                    │     User / Authority   │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   RESQ-GeoIntel UI    │
                    │   React + Vite        │
                    └───────────┬───────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        Risk Analysis      Site Assessment     Routing
              │                 │                 │
              └─────────────────┼─────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Decision Dashboard  │
                    └───────────────────────┘
```

### Future production architecture

The SIH concept can be extended with:

```text
Satellite / GIS / Rainfall / Terrain / Population Data
                         ↓
                    Data Layer
                         ↓
              Geospatial Processing
                         ↓
                Risk & Exposure Engine
                         ↓
          Site Capacity + Allocation Engine
                         ↓
               Hazard-Aware Routing
                         ↓
              Authority Dashboard
```

A possible backend implementation can use technologies such as:

* FastAPI
* PostgreSQL
* PostGIS
* SciPy
* pgRouting
* GIS / remote-sensing data sources
* Government-authoritative datasets

---

# 🛠️ Tech Stack

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

The prototype uses an interactive Leaflet-based map with OpenStreetMap tiles.

### Data

* Self-contained mock dataset
* Centralized data source in `src/data/mockData.js`

---

# 📁 Project Structure

```text
resq-geointel/
│
├── src/
│   ├── components/
│   │   ├── Sidebar
│   │   ├── TopBar
│   │   ├── MapView
│   │   └── MapLegend
│   │
│   ├── sections/
│   │   ├── Overview
│   │   ├── Risk Map
│   │   ├── Exposure
│   │   ├── Relocation Sites
│   │   ├── Capacity Engine
│   │   ├── Allocation
│   │   ├── Routing
│   │   └── Evidence
│   │
│   ├── pages/
│   │   ├── Landing
│   │   └── Dashboard
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ganeshsharma247/resq-geointel.git
cd resq-geointel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

To create the production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The generated production files are written to:

```text
dist/
```

---

# 🌐 Live Deployment

The current prototype is deployed using Vercel.

### Live Prototype

**https://resq-geointel.vercel.app**

### Source Code

**https://github.com/ganeshsharma247/resq-geointel**

Future updates pushed to the main GitHub branch can be deployed through the connected deployment workflow.

---

# 🎬 SIH Demo Flow

For a **2–4 minute demonstration**, the recommended flow is:

### 1. Landing

Introduce the problem and launch the decision dashboard.

### 2. Overview

Show the priority alert for the affected habitation.

### 3. Risk Map

Demonstrate the hazard zone and explain the risk-score breakdown.

### 4. Exposure

Show the number of affected people and vulnerable groups.

### 5. Relocation Sites

Compare the available candidate relocation sites.

### 6. Capacity Engine

Show whether each site has sufficient capacity based on the prototype's planning constraints.

### 7. Allocation

Demonstrate the multi-site allocation:

```text
2,000 → Site Alpha
2,500 → Site Beta
2,000 → Site Gamma
```

### 8. Routing

Generate the recommended route and compare it with the rejected hazardous shortest-path alternative.

### 9. Evidence & Assumptions

Explain the data sources, model factors and assumptions.

### 10. System Status

Demonstrate the offline/online concept for low-connectivity environments.

---

# 🔮 Future Scope

RESQ-GeoIntel can be extended from a demonstration prototype into a production-grade disaster-management decision-support platform.

### Real-Time Data Integration

Integration with authoritative sources for:

* Rainfall
* Terrain/elevation
* Flood and landslide information
* Population data
* Road networks
* Weather conditions
* Disaster alerts
* Satellite imagery

### Advanced Risk Modelling

Future versions can incorporate:

* Machine-learning-based hazard prediction
* Dynamic risk scores
* Temporal hazard modelling
* Satellite-image analysis
* Multi-hazard assessment

### Production Optimization

The allocation and routing engines can be connected to:

* Constraint optimization
* Real road-network graphs
* pgRouting
* Dynamic traffic information
* Shelter occupancy updates

### Mobile / Field Deployment

A dedicated field application could support:

* GPS-based navigation
* Offline maps
* Cached emergency data
* Field-worker updates
* Shelter occupancy updates
* Emergency communication

### Authority Integration

The system could eventually integrate with existing disaster-management workflows and authorized government systems.

---

# ⚠️ Prototype Limitations

This repository represents a **working SIH front-end prototype**, not a production emergency-response platform.

Current limitations include:

* Demo/mock geospatial data
* Simulated risk calculations
* Prototype capacity calculations
* Prototype allocation logic
* Demonstration routing logic
* Simulated offline status
* No live government-data integration
* No real-time emergency alert infrastructure

These components are structured so that production backend services and authoritative datasets can be integrated in future versions.

---

# 🔐 Data & Safety Note

RESQ-GeoIntel is intended to demonstrate a **decision-support workflow**.

For real-world deployment:

* Recommendations should be validated by authorized disaster-management personnel.
* Data sources should be authoritative and regularly updated.
* Risk classifications should not replace professional emergency assessment.
* Population and location data should be handled according to applicable privacy and security requirements.

---

# 👥 Team

### Team Datheon

**Smart India Hackathon 2026**

**Problem Statement:** SIH26191

**Project:** RESQ-GeoIntel

---

# 📌 Project Status

```text
Frontend Prototype       ✅ Complete
Interactive Dashboard    ✅ Complete
Risk Visualization       ✅ Complete
Exposure Analysis        ✅ Complete
Site Assessment          ✅ Complete
Capacity Engine          ✅ Complete
Multi-Site Allocation    ✅ Complete
Hazard-Aware Routing     ✅ Complete
Evidence Section         ✅ Complete
Offline Concept          ✅ Demonstrated
GitHub Repository        ✅ Public
Live Deployment          ✅ Active
Production Backend       🔄 Future Scope
Real-Time Data           🔄 Future Scope
```

---

## 🌐 Links

**Live Prototype:**
https://resq-geointel.vercel.app

**GitHub Repository:**
https://github.com/ganeshsharma247/resq-geointel

---

### Built for Smart India Hackathon 2026

**RESQ-GeoIntel — From Hazard Identification to Safer Relocation Decisions.**

