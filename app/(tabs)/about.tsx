import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ScrollView,
  useColorScheme,
} from "react-native";

const AboutScreen = () => {
  const openURL = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <ScrollView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text
        style={[
          styles.title,
          isDarkMode ? styles.darkTitle : styles.lightTitle,
          ,
          { marginTop: 20 },
        ]}
      >
        عن التطبيق
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        مرحبًا بكم في تطبيق <Text style={styles.highlight}>Radio Quran</Text>،
        التطبيق الذي يهدف إلى توفير تجربة استماع مميزة للقرآن الكريم بجميع لغات
        العالم. يقدم هذا التطبيق مجموعة متنوعة من القراء، بالإضافة إلى تفسير
        القرآن وقصص الصحابة وسيرة النبي محمد (صلى الله عليه وسلم).
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        ميزات التطبيق:
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - بث القرآن الكريم: استمتع بسماع القرآن الكريم بأصوات قراء مختلفين، مع
        اختيار اللغة المفضلة لك.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - تفسير القرآن: احصل على فهم أعمق للآيات مع تفسير شامل.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - قصص الصحابة: تعرف على قصص الصحابة وأدوارهم في الإسلام.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - سيرة النبي: استكشف حياة النبي محمد (صلى الله عليه وسلم) وأحداثها
        الملهمة.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - صفحة "قرأت القرآن": تابع تقدمك في قراءة القرآن الكريم.
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        مفتوح المصدر
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        يُعتبر تطبيق Radio Quran تطبيقًا مفتوح المصدر، مما يتيح للمطورين تحسين
        وتطوير التطبيق. يمكنك الاطلاع على الكود المصدر عبر الرابط أدناه.
      </Text>
      <Text
        style={[styles.link, isDarkMode ? styles.darkLink : styles.lightLink]}
        onPress={() =>
          openURL("https://github.com/MahmoudAbdullahAnani/Radio-Quran")
        }
      >
        https://github.com/MahmoudAbdullahAnani/Radio-Quran
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        تواصل معنا
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        لمزيد من المعلومات أو للتواصل معنا، يمكنك زيارة صفحتي على LinkedIn:
      </Text>
      <Text
        style={[styles.link, isDarkMode ? styles.darkLink : styles.lightLink]}
        onPress={() =>
          openURL("https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/")
        }
      >
        https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
          ,
          { textAlign: "center" },
        ]}
      >
        ================================================={" "}
      </Text>
      <Text
        style={[
          styles.title,
          isDarkMode ? styles.darkTitle : styles.lightTitle,
        ]}
      >
        About the App
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        Welcome to the <Text style={styles.highlight}>Radio Quran</Text> app,
        which aims to provide a unique listening experience of the Holy Quran in
        all languages around the world. This app offers a variety of reciters,
        as well as Tafsir (interpretation of the Quran), stories of the
        companions, and the biography of the Prophet Muhammad (peace be upon
        him).
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        Features of the App:
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - Quran Broadcasting: Enjoy listening to the Quran recited by different
        reciters, with the ability to choose your preferred language.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - Quran Tafsir: Gain a deeper understanding of the verses with
        comprehensive interpretation.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - Stories of the Companions: Learn about the stories and roles of the
        companions in Islam.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - Biography of the Prophet: Explore the life of the Prophet Muhammad
        (peace be upon him) and its inspiring events.
      </Text>
      <Text
        style={[
          styles.feature,
          isDarkMode ? styles.darkFeature : styles.lightFeature,
        ]}
      >
        - "I Read the Quran" Page: Track your progress in reading the Holy
        Quran.
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        Open Source
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        The Radio Quran app is open source, allowing developers to improve and
        develop the app. You can view the source code via the link below.
      </Text>
      <Text
        style={[styles.link, isDarkMode ? styles.darkLink : styles.lightLink]}
        onPress={() =>
          openURL("https://github.com/MahmoudAbdullahAnani/Radio-Quran")
        }
      >
        https://github.com/MahmoudAbdullahAnani/Radio-Quran
      </Text>

      <Text
        style={[
          styles.subtitle,
          isDarkMode ? styles.darkSubtitle : styles.lightSubtitle,
        ]}
      >
        Contact Us
      </Text>
      <Text
        style={[
          styles.description,
          isDarkMode ? styles.darkDescription : styles.lightDescription,
        ]}
      >
        For more information or to contact us, you can visit my LinkedIn page:
      </Text>
      <Text
        style={[
          styles.link,
          isDarkMode ? styles.darkLink : styles.lightLink,
          { marginBottom: 20 },
        ]}
        onPress={() =>
          openURL("https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/")
        }
      >
        https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  lightTitle: {
    color: "#000",
  },
  darkTitle: {
    color: "#fff",
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  lightDescription: {
    color: "#000",
  },
  darkDescription: {
    color: "#ddd",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  lightSubtitle: {
    color: "#000",
  },
  darkSubtitle: {
    color: "#fff",
  },
  highlight: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  lightFeature: {
    color: "#000",
  },
  darkFeature: {
    color: "#ddd",
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 12,
  },
  lightLink: {
    color: "blue",
  },
  darkLink: {
    color: "lightblue",
  },
});

export default AboutScreen;
