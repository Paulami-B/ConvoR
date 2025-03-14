import { useState } from "react";
import HorizontalSideBar from "../components/HorizontalSideBar";
import StoriesContacts from "../components/StoriesContacts";
import StoriesContainer from "../components/StoriesContainer";
import WelcomeScreen from "../components/WelcomeScreen";

export default function StoriesLayout() {
  const [showStories, setShowStories] = useState<boolean>(false)
  return (
    <div className="md:grid md:grid-cols-11 divide-x divide-orange-100 dark:divide-orange-900">
            <div className={`md:block col-span-4 lg:col-span-3`}>
              <StoriesContacts setShowStories = {setShowStories} />
              <HorizontalSideBar />
            </div>
            <div className={` md:block col-span-7 lg:col-span-8`}>
              {
                showStories ? (
                  <StoriesContainer setShowStories = {setShowStories} />
                ) : (
                  <WelcomeScreen />
                )
              }
            </div>
        </div>
  )
}
