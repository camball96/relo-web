import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  firstName?: string;
  name?: string;
  email?: string;
  message?: string;
}

const brand = {
  dark: "#111e18",
  text: "#0f1f1a",
  muted: "#4a6359",
  accent: "#7bbfa0",
  bg: "#edecea",
  border: "#c8cec8",
  card: "#ffffff",
  soft: "#ddeae3",
};

export function WelcomeEmail({
  firstName,
  name,
  email,
  message,
}: WelcomeEmailProps) {
  const displayName = (firstName || name || "").trim().split(" ")[0] || "there";

  return (
    <Html>
      <Head />
      <Preview>Welcome to the relo waitlist - you're in.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={heroSection}>
            <Text style={eyebrow}>WELCOME TO RELO</Text>
            <Text style={heroTitle}>
              You&apos;re in.
              <br />
              We&apos;ll let you know when doors open.
            </Text>
            <Text style={heroSubtext}>
              Hey {displayName}, thanks for joining the waitlist. We&apos;re
              building relo for service providers who want instant context on
              every client, without the clutter.
            </Text>
            <Button href="https://relocrm.au/#features" style={button}>
              See what&apos;s coming
            </Button>
          </Section>

          <Section style={contentSection}>
            <Text style={sectionTitle}>What to expect</Text>
            <Text style={bodyText}>
              Early access invitations will roll out in small batches. You&apos;ll
              get a direct email from us as soon as your spot is available.
            </Text>

            <Section style={infoCard}>
              <Text style={infoLabel}>Waitlist email</Text>
              <Text style={infoValue}>{email || "Added to your waitlist record"}</Text>
              {message ? (
                <>
                  <Hr style={divider} />
                  <Text style={infoLabel}>Your note</Text>
                  <Text style={infoNote}>{message}</Text>
                </>
              ) : null}
            </Section>

            <Text style={footnote}>
              No spam. Just product updates and your invite.
            </Text>
          </Section>

          <Hr style={footerDivider} />

          <Section style={footer}>
            <Text style={footerText}>
              relo - your clients, instantly recalled.
            </Text>
            <Text style={footerText}>
              Questions? Reply to this email or reach us at{" "}
              <Link href="mailto:hello@relocrm.au" style={footerLink}>
                hello@relocrm.au
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  margin: 0,
  padding: "28px 12px",
  backgroundColor: brand.bg,
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "580px",
  margin: "0 auto",
  backgroundColor: brand.card,
  border: `1px solid ${brand.border}`,
  borderRadius: "14px",
  overflow: "hidden",
};

const heroSection: React.CSSProperties = {
  backgroundColor: brand.dark,
  padding: "32px 32px 30px",
};

const eyebrow: React.CSSProperties = {
  margin: 0,
  color: "rgba(255,255,255,0.65)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "1.4px",
};

const heroTitle: React.CSSProperties = {
  margin: "16px 0 0",
  color: "#ffffff",
  fontFamily:
    "Iowan Old Style, Palatino Linotype, Book Antiqua, Palatino, Times New Roman, serif",
  fontSize: "38px",
  lineHeight: "1.12",
  fontWeight: 500,
  letterSpacing: "-0.8px",
};

const heroSubtext: React.CSSProperties = {
  margin: "18px 0 0",
  color: "rgba(255,255,255,0.72)",
  fontSize: "15px",
  lineHeight: "1.65",
};

const button: React.CSSProperties = {
  marginTop: "24px",
  backgroundColor: "#ffffff",
  color: brand.dark,
  padding: "11px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

const contentSection: React.CSSProperties = {
  padding: "28px 32px 26px",
};

const sectionTitle: React.CSSProperties = {
  margin: 0,
  color: brand.text,
  fontFamily:
    "Iowan Old Style, Palatino Linotype, Book Antiqua, Palatino, Times New Roman, serif",
  fontSize: "26px",
  lineHeight: "1.2",
  letterSpacing: "-0.4px",
  fontWeight: 500,
};

const bodyText: React.CSSProperties = {
  margin: "10px 0 0",
  color: brand.muted,
  fontSize: "15px",
  lineHeight: "1.7",
};

const infoCard: React.CSSProperties = {
  marginTop: "20px",
  backgroundColor: brand.soft,
  border: `1px solid ${brand.border}`,
  borderRadius: "10px",
  padding: "14px 14px 12px",
};

const infoLabel: React.CSSProperties = {
  margin: 0,
  color: "#2d4a3e",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1.1px",
};

const infoValue: React.CSSProperties = {
  margin: "8px 0 0",
  color: brand.text,
  fontSize: "14px",
  lineHeight: "1.5",
};

const infoNote: React.CSSProperties = {
  margin: "8px 0 0",
  color: brand.muted,
  fontSize: "14px",
  lineHeight: "1.6",
};

const divider: React.CSSProperties = {
  borderColor: brand.border,
  margin: "12px 0",
};

const footnote: React.CSSProperties = {
  margin: "14px 0 0",
  color: brand.accent,
  fontSize: "13px",
  lineHeight: "1.5",
  fontWeight: 600,
};

const footerDivider: React.CSSProperties = {
  borderColor: brand.border,
  margin: 0,
};

const footer: React.CSSProperties = {
  padding: "18px 32px 22px",
};

const footerText: React.CSSProperties = {
  margin: "0 0 8px",
  color: brand.muted,
  fontSize: "13px",
  lineHeight: "1.6",
};

const footerLink: React.CSSProperties = {
  color: "#1c3329",
  textDecoration: "underline",
};