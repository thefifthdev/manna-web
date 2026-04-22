import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";
import { APP_NAME, EFFECTIVE_DATE } from "../../../lib/constants";

export const metadata: Metadata = {
  title: `License — ${APP_NAME}`,
  description: `Software license for the ${APP_NAME} mobile app.`,
};

export default function LicensePage() {
  return (
    <LegalLayout
      title="License"
      eyebrow="License"
      effectiveDate={EFFECTIVE_DATE}
    >
      <h2>End-user license</h2>
      <p>
        The {APP_NAME} mobile application binary is distributed through the
        Solana dApp Store under a personal, non-transferable, revocable
        license for personal, non-commercial use. Installing the app from the
        dApp Store grants you this license, subject to the{" "}
        <a href="/terms">Terms of Use</a>.
      </p>

      <h2>App source</h2>
      <p>
        The {APP_NAME} client source code is <strong>All Rights Reserved</strong>{" "}
        © 2026 {APP_NAME}. Portions of the source that are published
        separately under an open-source license remain subject to those
        licenses.
      </p>

      <h2>Third-party open-source components</h2>
      <p>
        {APP_NAME} is built on top of excellent open-source software. We
        acknowledge and comply with the licenses of the following components,
        among others:
      </p>

      <h3>Runtime &amp; framework</h3>
      <ul>
        <li>
          <strong>React Native</strong> — MIT License, © Meta Platforms, Inc.
        </li>
        <li>
          <strong>React</strong> — MIT License, © Meta Platforms, Inc.
        </li>
        <li>
          <strong>Expo SDK</strong> — MIT License, © 650 Industries, Inc.
        </li>
        <li>
          <strong>Expo Router</strong> — MIT License.
        </li>
      </ul>

      <h3>Storage &amp; state</h3>
      <ul>
        <li>
          <strong>Zustand</strong> — MIT License, © Paul Henschel.
        </li>
        <li>
          <strong>AsyncStorage</strong> — MIT License, © React Native Community.
        </li>
        <li>
          <strong>expo-sqlite</strong> — MIT License.
        </li>
      </ul>

      <h3>UI &amp; motion</h3>
      <ul>
        <li>
          <strong>react-native-reanimated</strong> — MIT License, © Software
          Mansion.
        </li>
        <li>
          <strong>lottie-react-native</strong> — Apache 2.0, © Airbnb.
        </li>
        <li>
          <strong>expo-linear-gradient</strong> — MIT License.
        </li>
        <li>
          <strong>@expo/vector-icons</strong> — MIT License (bundled icon
          sets use their original licenses).
        </li>
      </ul>

      <h3>Platform integrations</h3>
      <ul>
        <li>
          <strong>react-native-android-widget</strong> — MIT License.
        </li>
        <li>
          <strong>expo-notifications</strong> — MIT License.
        </li>
        <li>
          <strong>react-native-view-shot</strong> — MIT License.
        </li>
      </ul>

      <h3>Website (this page)</h3>
      <ul>
        <li>
          <strong>Next.js</strong> — MIT License, © Vercel, Inc.
        </li>
        <li>
          <strong>Tailwind CSS</strong> — MIT License, © Tailwind Labs Inc.
        </li>
        <li>
          <strong>Framer Motion</strong> — MIT License, © Framer B.V.
        </li>
        <li>
          <strong>lottie-web</strong> — MIT License, © Airbnb.
        </li>
      </ul>

      <p>
        Full license texts for these components are distributed alongside
        each package in our production build and are available in the
        respective project repositories.
      </p>

      <h2>Brand assets</h2>
      <p>
        The {APP_NAME} name, logo, Lottie animations, UI designs, and
        marketing copy are © 2026 {APP_NAME}. All rights reserved. You may
        not use them in your own products or imply endorsement without
        written permission.
      </p>
    </LegalLayout>
  );
}
