"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
    const imageRef=useRef(null)
  useEffect(() => {
  const imageElement = imageRef.current;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;  // for making my image at landing page wavy 
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold && imageElement) {
      imageElement.classList.add("scrolled");
    } else  {
      imageElement.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl gradient-title'>
                    {" "}
                    Your AI Career Coach for
                    <br/>
                    Professional Success
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Advance your career with personalized guidance, interview prep, and AI-powered tools for job success </p>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href="/dashboard">
                    <Button size="lg" className='px-8'>
                        Get Started
                    </Button>
                </Link>
                <Link href="https://www.youtube.com/">
                    <Button size="lg" className='px-8' variant="outline">
                        Watch Demo
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image'>
                    <Image
                    src={"/banner.jpeg"}
                    alt="Banner Sensai"
                    width={1280}
                    height={720}
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                />
            </div>
                </div>
        </div>
    </section>
  )
}

export default HeroSection
