import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowRight, BookOpen, Cpu, Heart } from "lucide-react";
import styles from "./_index.module.css";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Book2Byte | Literacy Through Technology</title>
        <meta
          name="description"
          content="Book2Byte is an initiative to bring storybooks and digital literacy to children in marginalized areas. Join us in sparking imagination and building futures."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              From Storybooks to Laptops, Every Child Deserves to Dream.
            </h1>
            <p className={styles.heroSubtitle}>
              We believe in a world where curiosity isn't limited by circumstance. Book2Byte delivers books and technology to children in marginalized communities, unlocking a universe of imagination and opportunity.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg">
                <Link to="/get-involved">
                  Get Involved <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop"
              alt="Children reading a book together"
              className={styles.heroImage}
            />
          </div>
        </header>

        {/* Initiatives Section */}
        <section className={styles.initiativesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Initiatives</h2>
            <p className={styles.sectionSubtitle}>
              We tackle the literacy gap with a two-phase approach, starting with the timeless power of books and building towards a future of digital empowerment.
            </p>
          </div>
          <div className={styles.initiativesGrid}>
            <div className={styles.initiativeCard}>
              <div className={styles.cardIcon}>
                <BookOpen size={32} />
              </div>
              <h3 className={styles.cardTitle}>Storybook Distribution</h3>
              <p className={styles.cardText}>
                Our current focus is getting physical storybooks into the hands of children. We partner with local communities to run book drives and host literacy webinars, sparking a love for reading that lasts a lifetime.
              </p>
            </div>
            <div className={styles.initiativeCard}>
              <div className={styles.cardIcon}>
                <Cpu size={32} />
              </div>
              <h3 className={styles.cardTitle}>Digital Literacy Program</h3>
              <p className={styles.cardText}>
                Our long-term vision is to recycle and refurbish technology—phones, laptops, and desktops—to create digital learning hubs. We aim to bridge the digital divide and equip children with the skills for a modern world.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className={styles.impactSection}>
          <div className={styles.impactImageContainer}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1622&auto=format&fit=crop"
              alt="A child focused on learning"
              className={styles.impactImage}
            />
          </div>
          <div className={styles.impactContent}>
            <div className={styles.impactIcon}>
              <Heart size={24} />
            </div>
            <h2 className={styles.sectionTitle}>Why It Matters</h2>
            <p className={styles.impactText}>
              For many children, a book is more than just paper and ink—it's a window to other worlds, a catalyst for creativity, and the first step toward a brighter future. Access to stories builds critical thinking, empathy, and confidence. By providing these fundamental tools, we're not just giving a gift; we're investing in human potential.
            </p>
            <Button asChild variant="link" className={styles.impactLink}>
              <Link to="/get-involved">
                Help Us Make a Difference <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}