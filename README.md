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

The platform is designed around **decision continuity and explainability over black-box automation**. Major recommendations are supported by visible factors, assumptions, constraints, and decision logic.

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

> **Prototype scope:** Sphere-based planning constraints are demonstrated for decision-support purposes. The prototype does not claim official Sph
