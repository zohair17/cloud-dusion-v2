import { companyProfile } from "@/content/company/about";
import { contactPage } from "@/content/company/contact";
import { homePage } from "@/content/home/home";

/** Content-backed repository for the single-aggregate company context. */
export const companyRepository = {
  getProfile() {
    return companyProfile;
  },
  getContactPage() {
    return contactPage;
  },
  getHomePage() {
    return homePage;
  },
};
