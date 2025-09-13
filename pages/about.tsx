import React from "react";
import { Helmet } from "react-helmet";
import styles from "./about.module.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Book2Byte</title>
        <meta
          name="description"
          content="Learn the story behind Book2Byte, our mission to foster literacy, and our vision for a future empowered by technology."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.subtitle}>
            It started with a simple idea: a book can change a life. But we
            knew the story couldn't end there.
          </p>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1548&auto=format&fit=crop"
              alt="An open book with a story"
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>The First Chapter</h2>
            <p>
              Book2Byte was born from a conversation about privilege and
              potential. Our founder, a lifelong reader and technologist, saw a
              stark divide: children in some communities were surrounded by
              books and devices, while others grew up without ever holding a
              storybook. This wasn't just an absence of entertainment; it was an
              absence of opportunity—the chance to explore, to imagine, and to
              see the world beyond their immediate surroundings.
            </p>
            <p>
              The mission began with a single focus: get storybooks into the
              hands of children in marginalized areas. We believe that literacy
              is the foundation upon which all other learning is built. A child
              who loves to read is a child who is empowered to learn anything.
            </p>
          </div>
        </section>

        <section className={styles.visionSection}>
          <div className={styles.visionContent}>
            <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
            <div className={styles.visionGrid}>
              <div className={styles.visionCard}>
                <h3>Our Mission: Books Today</h3>
                <p>
                  To spark imagination and build foundational literacy by
                  providing children in underserved communities with access to
                  engaging storybooks and literacy programs. We aim to cultivate
                  a lifelong love of reading.
                </p>
              </div>
              <div className={styles.visionCard}>
                <h3>Our Vision: Bytes Tomorrow</h3>
                <p>
                  To bridge the digital divide by recycling technology and
                  creating access to digital tools and education. We envision a
                  future where every child has the skills to not just consume
                  information, but to create, innovate, and participate in the
                  digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Be a Part of the Next Chapter</h2>
          <p className={styles.ctaText}>
            Our story is still being written, and we need your help to turn the
            page. Whether you donate, volunteer, or partner with us, you're
            helping to build a world where every child has the tools to write
            their own future.
          </p>
          <Button asChild size="lg">
            <Link to="/get-involved">
              Join Our Mission <ArrowRight size={20} />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}