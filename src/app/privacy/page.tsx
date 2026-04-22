import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";
import { APP_NAME, SUPPORT_EMAIL, EFFECTIVE_DATE } from "../../../lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy practices for the ${APP_NAME} mobile app.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      eyebrow="Privacy"
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        {APP_NAME} is a Bible reading app published on the Solana dApp Store.
        This policy explains what information the app handles and what it does
        not. We designed {APP_NAME} to be as private as a printed book — your
        reading is yours.
      </p>

      <h2>1. What we collect</h2>
      <p>
        <strong>Nothing personally identifying.</strong> {APP_NAME} does not
        require an account, email address, phone number, or any sign-in. We do
        not collect, transmit, or store personal information on our servers.
      </p>

      <h2>2. What stays on your device</h2>
      <p>
        The app stores the following locally on your device using Android&apos;s
        on-device storage (AsyncStorage). This data never leaves your phone:
      </p>
      <ul>
        <li>Your preferred Bible translation (KJV, NLT, or NIV)</li>
        <li>Reading position (last book + chapter you opened)</li>
        <li>Saved passages and bookmarks</li>
        <li>Reading streak count and daily open timestamp</li>
        <li>App settings (font size, theme, notification preference)</li>
        <li>A flag recording whether you have seen the in-app feature guide</li>
      </ul>
      <p>Uninstalling the app deletes all of this data.</p>

      <h2>3. Network requests</h2>
      <p>
        To fetch scripture content, the app makes anonymous HTTPS requests to
        <strong> API.Bible</strong> (operated by the American Bible Society).
        These requests contain only the passage being requested — no device
        identifiers, no personal data. API.Bible&apos;s own privacy practices
        apply to those requests; they do not link them to you personally.
      </p>

      <h2>4. No tracking, ads, or analytics</h2>
      <ul>
        <li>No advertising SDKs</li>
        <li>No third-party analytics (Google Analytics, Mixpanel, etc.)</li>
        <li>No device fingerprinting</li>
        <li>No behavioral profiling</li>
        <li>No cookies or web tracking — {APP_NAME} is a native app</li>
      </ul>

      <h2>5. Notifications</h2>
      <p>
        If you enable daily verse notifications, they are scheduled and
        delivered entirely on-device. The notification text (the day&apos;s
        verse) is computed locally. No push server is involved.
      </p>

      <h2>6. Home-screen widget</h2>
      <p>
        The Android home-screen widget reads the current verse of the day from
        local storage and renders it on your home screen. It does not transmit
        any data.
      </p>

      <h2>7. Solana wallet (upcoming feature)</h2>
      <p>
        A future version will allow optional connection of a Solana wallet via
        Mobile Wallet Adapter for on-chain features (minting favorite verses,
        Solana Pay tithes). When released, connecting a wallet will be{" "}
        <strong>strictly opt-in</strong>. Wallet signing happens entirely
        between your wallet app and the blockchain; {APP_NAME} never has
        custody of your keys and never transmits your wallet address to any
        server operated by us.
      </p>

      <h2>8. Children</h2>
      <p>
        {APP_NAME} is safe for all ages and does not knowingly collect any
        data from children or anyone else. Because no account is required and
        no personal data is collected, the app is usable by minors under
        parental supervision without special provisions.
      </p>

      <h2>9. Your rights and choices</h2>
      <ul>
        <li>
          <strong>Delete your data:</strong> uninstall the app. All local data
          is removed.
        </li>
        <li>
          <strong>Disable notifications:</strong> toggle them off in the
          app&apos;s Profile tab or your Android system settings.
        </li>
        <li>
          <strong>Limit network use:</strong> the app works offline after
          first launch for previously viewed chapters.
        </li>
      </ul>

      <h2>10. Security</h2>
      <p>
        Because no personal data leaves your device, there is no server-side
        database to breach. Local data is protected by Android&apos;s standard
        app sandboxing.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy to reflect new features or legal
        requirements. The effective date at the top will change. Continued use
        of the app after an update constitutes acceptance of the revised
        policy.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this policy or your privacy? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
