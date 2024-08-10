'use client';

import { Tabs, Tab } from "@nextui-org/react";
import { sections } from "@/app/components/Sections";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [selected, setSelected] = useState<string>('home');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/project/")) {
      setSelected('projects');
    } else {
      setSelected('home');
    }
  }, [pathname]);

  const handleSelection = (key: string) => {
    router.push(`/#${key}`);
    setSelected(key);
  };

  return (
    <nav className="fixed h-fit w-fit z-[1000] bottom-0 md:top-0 w-full mb-6 md:mb-0 md:mt-8 select-none overscroll-none">
      <Tabs
        items={sections}
        radius="full"
        size="lg"
        selectedKey={selected}
        defaultSelectedKey={"home"}
        onSelectionChange={(key) => handleSelection(key as string)}
        classNames={{
          base: 'flex items-center justify-center w-full',
          tabList: 'p-2 bg-black/20 z-auto backdrop-blur-lg w-[500px]',
          tab: 'capitalize text-md text-secondary',
        }}
      >
        {(item) => (
          <Tab 
            key={item.name}
            title={item.name}
          />
        )}
      </Tabs>
    </nav>
  );
}

export default NavBar;
