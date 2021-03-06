---
sidebar_position: 2
title: Morphir Tutorial
---

# Morphir Tutorial

## What?

Morphir is a project to share business logic across people and technologies. By establishing a commong data structure for storing business logic, Morphir enables an ecosystem of tools to define and process business logic in useful ways. Before we get into the tutorial, it's worth considering what we mean by business logic. Take the essence of any business application, take away all of the infrastructure, concurrency, messaging, etc. What's left is the essense of the application - it's reason for being. That is the business logic. It is how the business experts would describe the application in the language of the business.

For this tutorial, we'll use the example of a surfboard rental business.

![surfboard Rentals](./surfboard_rentals.png)

The business is simple: Rent surfboards whenever they're available.

## Why?

Seems simple enough, so why would we consider doing it with Morphir. One of our goals is to optimize the feedback loop between the business and developers.
Business experts tend to the think of an application in its business terms.

### Business View

In this case they might be thinking something like:

<div style={{paddingLeft:'50px', fontSize:'20px', borderStyle: 'solid'}} >
  <math xmlns="http://www.w3.org/1998/Math/MathML" mode="display">
     <mrow>
          <mi>availability</mi>
          <mo>=</mo>
          <mi>inventory</mi>
          <mn>+</mn>
          <mi>returns</mi>
          <mn>-</mn>
          <mi>reservations</mi>
     </mrow>
  </math>
  <br/>
  <br/>
where:
  <br/>
  <p style={{paddingLeft:'70px'}} >
  <math xmlns="http://www.w3.org/1998/Math/MathML" mode="display">
     <mrow>
          <mi>inventory</mi>
          <mo>=</mo>
          <mo>&sum;</mo> <mi>items in the store</mi>
     </mrow>
     <br/>
     <mrow>
          <mi>returns</mi>
          <mo>=</mo>
          <mo>&lfloor;</mo>
          <mfrac>
               <mo>
               ( 
                    <mo>
                         <mo>&sum;</mo> 
                         <mi>scheduled returns</mi>
                    </mo> 
               )
               </mo>
               <mo>*</mo>
               <mn>late return ratio</mn>
          </mfrac>
          <mo>&rfloor;</mo>
     </mrow>
     <br/>
     <mrow>
          <mi>reserved</mi>
          <mo>=</mo>
          <mo>&lfloor;</mo>
          <mrow>
               <mo>
               ( 
                    <mo>
                         <mo>&sum;</mo>
                         <mi>current reservations</mi>
                    </mo> 
               )
               </mo>
               <mo>*</mo>
               <mn>no show ratio</mn>
          </mrow>
          <mo>&rfloor;</mo>
     </mrow>
  </math>
  </p>
</div>

### Developer View

This specification gets handed to developers, who immediately start thinking of how to split it up to run most efficiently on the various technologies. They might view it as:

![surfboard Rentals](./developer_view.png)

## Lost Knowledge

The problem comes when, inevitably, developers and business experts come and go, documentation gets stale, and other factors cause the knowledge of the application's expected behavior to get out of sync, stale, or lost over time. As that happens, individual technologies become the system of record for the application's behavior. What's left is this:

![surfboard Rentals](./lost_knowledge.png)

At this point, it becomes difficult to reason about the application and what changes will do to it. That's a major problem for a large application. It leads to legacy debt, higher risk, and slower delivery.

## Optimum Efficiency

We want to get back to the business logic being the main asset of the application. The optimal efficiency is a state where the business logic is the central developer focus that gets continuosly projected onto the various technologies of the moment:

![surfboard Rentals](./ideal.png)

So with that out of the way, let's dive in...
