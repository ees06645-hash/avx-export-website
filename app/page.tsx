"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-950">

      {/* NAVBAR */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tight text-white"
          >
            AVX EXPORT<span className="text-lime-300">.</span>
          </a>

          {/* Menu */}
          <div className="hidden items-center gap-6 lg:flex">
            <a href="#" className="text-sm font-medium text-white hover:text-lime-300">
              Home
            </a>

            <a href="#about" className="text-sm font-medium text-white hover:text-lime-300">
              About
            </a>

            <a href="#products" className="text-sm font-medium text-white hover:text-lime-300">
              Products
            </a>

            <a href="#quality" className="text-sm font-medium text-white hover:text-lime-300">
              Quality
            </a>

            <a href="#packaging" className="text-sm font-medium text-white hover:text-lime-300">
              Packaging
            </a>

            <a href="#process" className="text-sm font-medium text-white hover:text-lime-300">
              Process
            </a>

            <a href="#gallery" className="text-sm font-medium text-white hover:text-lime-300">
              Gallery
            </a>

            <a href="#certifications" className="text-sm font-medium text-white hover:text-lime-300">
              Certifications
            </a>

            <a href="#enquiry" className="text-sm font-medium text-white hover:text-lime-300">
              Bulk Enquiry
            </a>

            <a href="#contact" className="text-sm font-medium text-white hover:text-lime-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xl text-white lg:hidden"
  aria-label="Toggle menu"
>
  {menuOpen ? "✕" : "☰"}
</button>

{menuOpen && (
  <div className="absolute left-4 right-4 top-20 z-50 rounded-3xl bg-green-950 p-6 shadow-2xl lg:hidden">
    <div className="flex flex-col gap-5">

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        About
      </a>

      <a
        href="#products"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Products
      </a>

      <a
        href="#quality"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Quality
      </a>

      <a
        href="#packaging"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Packaging
      </a>

      <a
        href="#process"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Process
      </a>

      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Gallery
      </a>

      <a
        href="#certifications"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Certifications
      </a>

      <a
        href="#enquiry"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Bulk Enquiry
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="font-medium text-white"
      >
        Contact
      </a>

    </div>
  </div>
)}

{/* Quote */}
<a
  href="#enquiry"
  className="rounded-full bg-white px-6 py-3 font-bold text-gray-950"
>
  Get a Quote
</a>

        </nav>
      </header>


      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-green-950">

        <img
  src="/image/avocado-hero.jpg"
  alt="Fresh Indian Avocados"
  className="absolute inset-0 h-full w-full object-cover opacity-30"
/>

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(163,230,53,0.16),transparent_38%)]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-24">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />

              <span className="text-sm font-medium text-white/90">
                Fresh from Yercaud • India
              </span>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">
              Premium Indian Produce
            </p>

            <h1 className="max-w-2xl text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Premium
              <br />
              <span className="text-lime-300">Avocados.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              Fresh, carefully handled avocados from India,
              prepared for wholesalers, suppliers and buyers
              looking for dependable quality.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#enquiry"
                className="rounded-full bg-lime-400 px-8 py-4 text-center font-bold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-lime-300"
              >
                Get a Quote →
              </a>

              <a
                href="https://wa.me/916384553693"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                WhatsApp Us
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60">
              <span>✓ Fresh Indian Produce</span>
              <span>✓ Buyer-Focused Supply</span>
              <span>✓ Quality Handling</span>
            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative z-10">

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl">

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="/image/avocado-hero.jpg"
                  alt="Fresh premium Indian avocados"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 md:h-[560px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                  <p className="text-sm font-medium text-white/70">
                    AVX Export
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-white">
                    Fresh Avocados from India
                  </h2>

                </div>

              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full border border-lime-300/20" />

          </div>

        </div>
      </section>

      {/* BUYER REQUIREMENTS FLOWCHART */}
<section className="bg-[#f7faf5] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        Buyer Requirements
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
        Tailored to Your Business Needs
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
        Product grade, size, quantity and packaging can be discussed
        according to the buyer&apos;s requirements.
      </p>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-xl">
      <img
        src="/image/avocado-3.jpg"
        alt="AVX Export Buyer Requirements Flowchart"
        className="h-auto w-full object-contain"
      />
    </div>
  </div>
</section>

{/* PRODUCTS */}
<section
  id="products"
  className="bg-[#f7faf5] px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        Our Products
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
        Premium avocado supply,
        <span className="text-green-700"> made simple.</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Fresh Indian avocados supplied according to buyer,
        quantity, packaging and destination requirements.
      </p>
    </div>

    {/* Product Cards */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Product 1 */}
      <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="h-64 overflow-hidden">
          <img
            src="/image/avocado-1.jpg"
            alt="Fresh Avocados"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Fresh Produce
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-950">
            Fresh Avocados
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Carefully selected fresh avocados prepared for
            wholesale and bulk buyer requirements.
          </p>
        </div>
      </div>


      {/* Product 2 */}
      <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="h-64 overflow-hidden">
          <img
            src="/image/avocado-2.jpg"
            alt="Wholesale Avocados"
            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Bulk Supply
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-950">
            Wholesale Supply
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Bulk avocado supply for wholesalers, suppliers,
            retailers and business buyers.
          </p>
        </div>
      </div>


      {/* Product 3 */}
      <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="h-64 overflow-hidden">
          <img
            src="/image/avocado-3.jpg"
            alt="Avocado Export Packing"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Buyer Requirements
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-950">
            Custom Supply
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Product grade, size, quantity and packaging can be
            discussed according to the buyer's requirements.
          </p>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-green-950 p-8 md:flex-row md:items-center md:p-10">

      <div>
        <h3 className="text-2xl font-bold text-white">
          Looking for bulk avocado supply?
        </h3>

        <p className="mt-2 text-white/60">
          Tell us your quantity and requirement.
        </p>
      </div>

      <a
        href="#enquiry"
        className="whitespace-nowrap rounded-full bg-lime-400 px-7 py-3 font-bold text-green-950 transition hover:bg-lime-300"
      >
        Get a Quote →
      </a>

    </div>

  </div>
</section>

{/* QUALITY & HANDLING */}
<section
  id="quality"
  className="bg-white px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

      {/* Left */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Quality & Handling
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
          Quality comes first.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Every order is handled with attention to freshness,
          product condition and buyer requirements from sourcing
          through dispatch.
        </p>

        <a
          href="#enquiry"
          className="mt-8 inline-block rounded-full bg-green-950 px-7 py-4 font-bold text-white transition hover:bg-green-800"
        >
          Discuss Your Requirement →
        </a>
      </div>

      {/* Right */}
      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-3xl bg-[#f5f9f2] p-7">
          <div className="text-3xl">🥑</div>

          <h3 className="mt-5 text-xl font-bold">
            Careful Selection
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Product selection based on order and buyer
            requirements.
          </p>
        </div>

        <div className="rounded-3xl bg-[#f5f9f2] p-7">
          <div className="text-3xl">✓</div>

          <h3 className="mt-5 text-xl font-bold">
            Quality Handling
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Careful handling to help maintain product quality
            throughout the order process.
          </p>
        </div>

        <div className="rounded-3xl bg-[#f5f9f2] p-7">
          <div className="text-3xl">📦</div>

          <h3 className="mt-5 text-xl font-bold">
            Buyer Specifications
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Size, grade and packaging can be discussed according
            to requirements.
          </p>
        </div>

        <div className="rounded-3xl bg-green-950 p-7 text-white">
          <div className="text-3xl">→</div>

          <h3 className="mt-5 text-xl font-bold">
            Reliable Supply
          </h3>

          <p className="mt-3 leading-7 text-white/60">
            A buyer-focused approach from enquiry to dispatch.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* PACKAGING */}
<section
  id="packaging"
  className="bg-[#f7faf5] px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* Packaging Visual */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-green-950 p-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-lime-300/20" />

        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            Export Packaging
          </p>

          <div className="mt-8 text-7xl">
            📦
          </div>

          <h3 className="mt-8 text-3xl font-black text-white">
            Packed for safe handling.
          </h3>

          <p className="mt-4 leading-7 text-white/60">
            Packaging can be discussed according to product,
            quantity, destination and buyer requirements.
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Packaging
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
          Packaging designed around your order.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We focus on suitable export-oriented packaging and
          careful preparation to support safe movement of fresh
          avocados.
        </p>

        <div className="mt-10 space-y-4">

          <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <span className="text-2xl">📦</span>

            <div>
              <h3 className="font-bold text-gray-950">
                Export-Grade Packaging
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Packaging options discussed based on shipment
                and destination requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <span className="text-2xl">🥑</span>

            <div>
              <h3 className="font-bold text-gray-950">
                Product Protection
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Careful packing helps protect the product during
                handling and transportation.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <span className="text-2xl">🌍</span>

            <div>
              <h3 className="font-bold text-gray-950">
                Destination-Based Planning
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Packaging requirements can vary depending on
                destination, quantity and transport method.
              </p>
            </div>
          </div>

        </div>

        <a
          href="#enquiry"
          className="mt-9 inline-block rounded-full bg-green-950 px-7 py-4 font-bold text-white transition hover:bg-green-800"
        >
          Ask About Packaging →
        </a>
      </div>

    </div>

  </div>
</section>

{/* OUR PROCESS */}
<section
  id="process"
  className="bg-white px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        Our Process
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
        From enquiry to dispatch.
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        A simple, buyer-focused process designed to keep every
        order clear and organised.
      </p>
    </div>

    {/* Process Steps */}
    <div className="relative mt-16">

      {/* Desktop Line */}
      <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-green-200 lg:block" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Step 1 */}
        <div className="relative rounded-3xl bg-[#f7faf5] p-7 text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-950 text-2xl font-black text-lime-300">
            01
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-950">
            Buyer Enquiry
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Share your required quantity, product details,
            packaging and destination.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative rounded-3xl bg-[#f7faf5] p-7 text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-950 text-2xl font-black text-lime-300">
            02
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-950">
            Requirement Review
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            We discuss suitable product, quantity, grade and
            packaging requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative rounded-3xl bg-[#f7faf5] p-7 text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-950 text-2xl font-black text-lime-300">
            03
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-950">
            Order Preparation
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Product is prepared and packed according to the
            agreed order requirements.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative rounded-3xl bg-green-950 p-7 text-center text-white">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-2xl font-black text-green-950">
            04
          </div>

          <h3 className="mt-6 text-xl font-bold">
            Dispatch
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/60">
            Shipment is coordinated according to the agreed
            transport and destination requirements.
          </p>
        </div>

      </div>
    </div>

    {/* Transport Note */}
    <div className="mt-12 rounded-3xl border border-green-100 bg-[#f7faf5] p-7 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
        Transport Support
      </p>

      <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-600">
        Transportation requirements can be discussed for
        wholesale supply, other-state movement and export
        shipments based on the order and destination.
      </p>
    </div>

  </div>
</section>

{/* GALLERY */}
<section
  id="gallery"
  className="bg-[#f7faf5] px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Gallery
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
          A closer look at AVX.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Fresh produce, careful handling and professional
          preparation — presented simply.
        </p>
      </div>

      <a
        href="#enquiry"
        className="w-fit rounded-full bg-green-950 px-6 py-3 font-bold text-white transition hover:bg-green-800"
      >
        Enquire Now →
      </a>

    </div>

    {/* Gallery Grid */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {/* Large Image */}
      <div className="group relative overflow-hidden rounded-[2rem] md:col-span-2 lg:row-span-2">
        <img
          src="/image/avocado-4.jpg"
          alt="Fresh avocados"
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />

        <div className="absolute bottom-7 left-7">
          <p className="text-sm font-medium text-white/70">
            AVX Export
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            Fresh Indian Avocados
          </h3>
        </div>
      </div>

      {/* Image 2 */}
      <div className="group relative overflow-hidden rounded-[2rem]">
        <img
          src="/image/avocado-5.jpg"
          alt="Premium avocado"
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Image 3 */}
      <div className="group relative overflow-hidden rounded-[2rem]">
        <img
          src="/image/avocado-6.jpg"
          alt="Avocado produce"
          className="h-64 w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
      </div>

    </div>

  </div>
</section>

{/* CERTIFICATIONS & DOCUMENTATION */}
<section
  id="certifications"
  className="bg-white px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        Certifications & Documentation
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
        Documentation you can rely on.
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Required export and shipment documentation can be
        discussed according to the buyer, destination and
        applicable requirements.
      </p>

    </div>

    <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">

      <div className="rounded-3xl border border-gray-100 bg-[#f7faf5] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-950 text-xl text-lime-300">
          ✓
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Export Documentation
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Documentation can be prepared or coordinated according
          to applicable shipment requirements.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-[#f7faf5] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-950 text-xl text-lime-300">
          📋
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Buyer Requirements
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Product and documentation requirements can be discussed
          before confirming an order.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-[#f7faf5] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-950 text-xl text-lime-300">
          🔒
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Verified Information
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Official certifications and registrations will be
          displayed only after they are actually available.
        </p>
      </div>

    </div>

    <div className="mx-auto mt-8 max-w-5xl rounded-3xl bg-green-950 p-8 text-center md:p-10">

      <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-300">
        Need Specific Documentation?
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        Tell us your destination and requirements.
      </h3>

      <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/60">
        Our team can discuss the documentation and shipment
        requirements relevant to your enquiry.
      </p>

      <a
        href="#enquiry"
        className="mt-7 inline-block rounded-full bg-lime-400 px-7 py-3 font-bold text-green-950 transition hover:bg-lime-300"
      >
        Discuss Requirements →
      </a>

    </div>

  </div>
</section>

{/* BULK BUYER ENQUIRY */}
<section
  id="enquiry"
  className="bg-[#f7faf5] px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Bulk Buyer Enquiry
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
          Tell us what you need.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Whether you are a wholesaler, supplier, retailer or
          business buyer, share your requirement with us.
        </p>

        {/* Supply Options */}
        <div className="mt-9 space-y-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-bold text-gray-950">
              Wholesale Supply
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Bulk avocado requirements for wholesalers and
              business buyers.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-bold text-gray-950">
              Supply Requirements
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Regular or one-time supply requirements can be
              discussed.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-bold text-gray-950">
              Other-State Transportation
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Transportation requirements for movement to other
              states can be discussed based on the order.
            </p>
          </div>

          <div className="rounded-2xl bg-green-950 p-5 text-white">
            <h3 className="font-bold">
              Export Transportation
            </h3>

            <p className="mt-1 text-sm leading-6 text-white/60">
              Export shipment and transport requirements can be
              discussed according to destination and order.
            </p>
          </div>

        </div>
      </div>


      {/* FORM */}
      <div className="rounded-[2rem] bg-green-950 p-6 shadow-2xl md:p-10">

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white">
            Send Your Requirement
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Share your basic requirement and we can discuss the
            next steps.
          </p>
        </div>

        <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const requirement = data.get("requirement") || "";
    const quantity = data.get("quantity") || "";

    const message = `Hello AVX Export

I would like to enquire about avocado supply.

Name / Company: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}
Requirement: ${requirement}
Required Quantity: ${quantity}

Thank you.`;

    window.open(
      `https://wa.me/916384553693?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Name / Company
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name or company"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Phone / WhatsApp
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="+91"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Requirement Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Requirement
            </label>

            <select
            name="requirement"
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3.5 text-gray-900 outline-none focus:border-lime-400"
            >
              <option value="" disabled>
                Select your requirement
              </option>

              <option value="wholesale">
                Wholesale Supply
              </option>

              <option value="regular-supply">
                Regular Supply
              </option>

              <option value="other-state">
                Other-State Transportation
              </option>

              <option value="export">
                Export Transportation
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Required Quantity
            </label>

            <input
              type="text"
              name="quantity"
              placeholder="Example: 500 kg / 2 tons"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Destination
            </label>

            <input
              type="text"
              name="destination"
              placeholder="City / State / Country"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Tell us your product, packaging or transport requirements..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-lime-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-lime-400 px-6 py-4 font-bold text-green-950 transition hover:bg-lime-300"
          >
            Send Buyer Enquiry →
          </button>

        </form>

      </div>

    </div>

  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="bg-white px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* LEFT — CONTACT DETAILS */}
      <div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Contact AVX Export
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
          Let&apos;s discuss your requirement.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Looking for fresh avocados, wholesale supply,
          other-state transportation or export transportation?
          Get in touch with AVX Export.
        </p>


        {/* COMPANY */}
        <div className="mt-10 rounded-3xl bg-[#f7faf5] p-6">

          <p className="text-sm text-gray-500">
            Company
          </p>

          <h3 className="mt-1 text-2xl font-black text-gray-950">
            AVX Export
          </h3>

        </div>


        {/* PHONE NUMBERS */}
        <div className="mt-4 rounded-3xl bg-[#f7faf5] p-6">

          <p className="text-sm text-gray-500">
            Phone / WhatsApp
          </p>

          <div className="mt-3 space-y-2">

            <a
              href="tel:+916384553693"
              className="block font-bold text-gray-950 transition hover:text-green-700"
            >
              +91 63845 53693
            </a>

            <a
              href="tel:+919487123693"
              className="block font-bold text-gray-950 transition hover:text-green-700"
            >
              +91 94871 23693
            </a>

            <a
              href="tel:+918300746461"
              className="block font-bold text-gray-950 transition hover:text-green-700"
            >
              +91 83007 46461
            </a>

          </div>

        </div>


        {/* EMAIL */}
        <a
          href="mailto:avxexports@gmail.com"
          className="mt-4 flex items-center gap-5 rounded-3xl bg-[#f7faf5] p-6 transition hover:bg-green-50"
        >

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            ✉️
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <h3 className="mt-1 font-bold text-gray-950">
              avxexports@gmail.com
            </h3>

          </div>

        </a>


        {/* ADDRESS */}
        <div className="mt-4 flex items-start gap-5 rounded-3xl bg-[#f7faf5] p-6">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            📍
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Address
            </p>

            <h3 className="mt-1 font-bold leading-7 text-gray-950">
              226/4 Nadur, Pattipadi,
              <br />
              Yercaud, Salem,
              <br />
              Tamil Nadu 636601,
              <br />
              India
            </h3>

          </div>

        </div>

      </div>


      {/* RIGHT — WHATSAPP CTA */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-green-950 p-8 shadow-2xl md:p-12">

        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-lime-300/10" />

        <div className="relative">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            Quick Enquiry
          </p>

          <h3 className="mt-5 text-3xl font-black text-white md:text-4xl">
            Ready to source fresh avocados?
          </h3>

          <p className="mt-5 leading-8 text-white/60">
            Send your quantity, destination and supply
            requirement directly to our WhatsApp.
          </p>


          {/* WhatsApp */}
          <a
            href="https://wa.me/916384553693"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 flex items-center gap-4 rounded-2xl bg-lime-400 p-5 text-green-950 transition hover:bg-lime-300"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-950 text-xl text-lime-300">
              💬
            </div>

            <div>

              <p className="text-sm font-medium">
                WhatsApp
              </p>

              <p className="font-black">
                +91 63845 53693
              </p>

            </div>

            <span className="ml-auto text-xl">
              →
            </span>

          </a>


          {/* Quote Button */}
          <a
            href="#enquiry"
            className="mt-4 block rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
          >
            Send a Buyer Enquiry →
          </a>


          {/* Location */}
          <div className="mt-10 border-t border-white/10 pt-7">

            <p className="text-sm font-medium text-white/50">
              Based in
            </p>

            <p className="mt-2 font-bold text-white">
              Yercaud, Salem, Tamil Nadu, India
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* QUICK INTRO */}
      <section
        id="about"
        className="bg-white px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Welcome to AVX Export
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Freshness you can build your business around.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            AVX Export connects quality Indian avocado supply with
            buyers looking for reliable sourcing, careful handling
            and professional order support.
          </p>

        </div>
      </section>

{/* FOOTER */}
<footer className="bg-[#003d20] text-white">
   <div className="mx-auto max-w-7xl px-8 py-12">
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

    <div>
      <h3 className="text-2xl font-black">
        AVX EXPORT<span className="text-lime-400">.</span>
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-300">
        Premium Indian avocados, carefully sourced and prepared
        for reliable domestic and export supply.
      </p>
    </div>

    <div>
      <h4 className="font-bold">Quick Links</h4>

      <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#quality">Quality</a>
        <a href="#packaging">Packaging</a>
        <a href="#process">Process</a>
        <a href="#gallery">Gallery</a>
      </div>
    </div>

    <div>
      <h4 className="font-bold">Contact</h4>

      <div className="mt-4 space-y-3 text-sm text-gray-300">
  <a
    href="tel:6384553693"
    className="block hover:text-lime-400 transition"
  >
    📞 6384553693
  </a>

  <a
    href="tel:9487123693"
    className="block hover:text-lime-400 transition"
  >
    📞 9487123693
  </a>

  <a
    href="tel:8300746461"
    className="block hover:text-lime-400 transition"
  >
    📞 8300746461
  </a>

  <a
    href="https://wa.me/916384553693"
    target="_blank"
    className="block hover:text-lime-400 transition"
  >
    💬 WhatsApp
  </a>

  <a
    href="mailto:avxexports@gmail.com"
    className="block hover:text-lime-400 transition"
  >
    ✉️ avxexports@gmail.com
  </a>
</div>
    </div>

    <div>
      <h4 className="font-bold">Address</h4>

      <a
  href="https://www.google.com/maps/search/?api=1&query=11.811444,78.190722"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-gray-300 hover:text-lime-400 transition"
>
  📍 226/4 Nadur, Pattipadi,<br />
  Yercaud, Salem,<br />
  Tamil Nadu 636601,<br />
  India<br />
  <span className="text-xs text-lime-400">
    R56R+H7H Pattipadi
  </span>
</a>
    </div>

  </div>

  <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
    © 2026 AVX Export. All rights reserved.
  </div>
</div>
</footer>

</main>
);
}
