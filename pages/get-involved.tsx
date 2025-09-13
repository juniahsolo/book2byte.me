import React from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { Button } from "../components/Button";
import { VolunteerForm } from "../components/VolunteerForm";
import { PartnershipForm } from "../components/PartnershipForm";
import styles from "./get-involved.module.css";
import { Heart, Users, Handshake } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <>
      <Helmet>
        <title>Get Involved | Book2Byte</title>
        <meta
          name="description"
          content="Join the Book2Byte mission. You can donate to fund book drives, volunteer your time, or partner with us to make a lasting impact."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get Involved</h1>
          <p className={styles.subtitle}>
            Your support is crucial to our mission. Discover how you can help us
            bring books and technology to children in need.
          </p>
        </header>

        <Tabs defaultValue="donate" className={styles.tabsContainer}>
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="donate" className={styles.tabTrigger}>
              <Heart size={16} />
              Donate
            </TabsTrigger>
            <TabsTrigger value="volunteer" className={styles.tabTrigger}>
              <Users size={16} />
              Volunteer
            </TabsTrigger>
            <TabsTrigger value="partner" className={styles.tabTrigger}>
              <Handshake size={16} />
              Partner
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className={styles.tabContent}>
            <div className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>Support Our Cause</h2>
              <p className={styles.contentDescription}>
                Every donation, big or small, helps us purchase and distribute
                books to children who need them most. Your contribution
                directly funds our book drives and supports our literacy
                webinars, making a tangible difference in a child's life.
              </p>
            </div>
            <div className={styles.actionArea}>
              <p className={styles.donationInfo}>
                Our online donation platform is coming soon. For now, please
                reach out to us directly for donation inquiries.
              </p>
              <Button size="lg" disabled>
                Donate Now (Coming Soon)
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="volunteer" className={styles.tabContent}>
            <div className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>Lend Your Time & Talent</h2>
              <p className={styles.contentDescription}>
                Volunteers are the heart of our organization. Whether you can
                help with book distribution, support our webinars, or offer
                technical expertise, your time is one of the most valuable gifts
                you can give.
              </p>
            </div>
            <div className={styles.formContainer}>
              <VolunteerForm />
            </div>
          </TabsContent>

          <TabsContent value="partner" className={styles.tabContent}>
            <div className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>Partner With Us</h2>
              <p className={styles.contentDescription}>
                We collaborate with schools, NGOs, libraries, and tech companies
                to amplify our impact. If your organization shares our vision,
                we would love to explore how we can work together to create
                lasting change.
              </p>
            </div>
            <div className={styles.formContainer}>
              <PartnershipForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}