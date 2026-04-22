import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";
import { APP_NAME, SUPPORT_EMAIL, EFFECTIVE_DATE } from "../../../lib/constants";

export const metadata: Metadata = {
  title: `Terms of Use — ${APP_NAME}`,
  description: `Terms of use for the ${APP_NAME} mobile app.`,
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      eyebrow="Terms"
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the{" "}
        {APP_NAME} mobile application. By installing or using the app, you
        agree to these Terms. If you do not agree, please uninstall the app.
      </p>

      <h2>1. License to use the app</h2>
      <p>
        Subject to these Terms, we grant you a personal, worldwide,
        non-exclusive, non-transferable, revocable license to install and use
        {` ${APP_NAME} `}on Android devices you own or control, for your
        personal, non-commercial use.
      </p>

      <h2>2. What you may not do</h2>
      <ul>
        <li>
          Reverse-engineer, decompile, or disassemble the app except where
          such restriction is prohibited by applicable law.
        </li>
        <li>
          Use the app to scrape, harvest, or redistribute scripture content
          beyond personal use.
        </li>
        <li>
          Resell, rent, sublicense, or commercially exploit the app or its
          assets.
        </li>
        <li>
          Use the app in any way that violates applicable law or the rights
          of others.
        </li>
        <li>
          Attempt to circumvent any security, rate-limit, or licensing
          mechanism of the app or its API providers.
        </li>
      </ul>

      <h2>3. Scripture content</h2>
      <p>
        Bible translations delivered through {APP_NAME} remain the intellectual
        property of their respective copyright holders:
      </p>
      <ul>
        <li>
          <strong>King James Version (KJV)</strong> — Public Domain.
        </li>
        <li>
          <strong>New Living Translation (NLT)</strong> — © Tyndale House
          Foundation. Used under license via API.Bible.
        </li>
        <li>
          <strong>New International Version (NIV)</strong> — © Biblica, Inc.
          Used under license via API.Bible.
        </li>
      </ul>
      <p>
        You may view, save, and share individual passages for personal,
        non-commercial use. You may not redistribute full copyrighted
        translations.
      </p>

      <h2>4. Third-party services</h2>
      <p>
        {APP_NAME} uses <strong>API.Bible</strong> (American Bible Society) to
        deliver scripture. Your use of scripture content is also subject to
        API.Bible&apos;s terms. The app is distributed via the{" "}
        <strong>Solana dApp Store</strong>, whose policies also apply to
        installation and distribution.
      </p>

      <h2>5. User content</h2>
      <p>
        {APP_NAME} does not host user-generated content. Share cards you
        generate locally are stored on your device and are yours to share at
        your discretion.
      </p>

      <h2>6. Wallet features (when available)</h2>
      <p>
        Future wallet integration (via Mobile Wallet Adapter) is opt-in.
        You are solely responsible for the security of your wallet, your
        keys, and any on-chain transactions you sign. {APP_NAME} is not a
        custodian, never holds your keys, and cannot reverse blockchain
        transactions.
      </p>

      <h2>7. No warranty</h2>
      <p>
        THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
        WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT. We do not warrant that the app will be
        uninterrupted, error-free, or that scripture content will always be
        available from upstream providers.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL {APP_NAME}
        {", "}ITS PUBLISHER, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
        OF PROFITS OR DATA, ARISING FROM YOUR USE OF THE APP.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may stop using the app at any time by uninstalling it. We may
        terminate or suspend the app, features, or your license if you
        violate these Terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of your jurisdiction of
        residence unless otherwise required by applicable law.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        reflected by a new effective date. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
