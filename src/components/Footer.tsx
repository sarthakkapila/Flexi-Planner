import { Button } from "@/components/ui/button"


export const Footer = () => {
  return (
<div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
<div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">

<p className="text-sm">© 2024 FlexiPlanner. All rights reserved.</p>
</div>
<div className="md:ml-auto w-full justify-between md:justify-center flex items-center gap-x-2 text-muted-foreground">
<h1 className="center">Made with ❤️ by Sarthak Kapila</h1>
</div>
<div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">

  <Button variant="ghost" size="sm">
    Privacy Policy
  </Button>
  <Button variant="ghost" size="sm">
    Terms & Conditions
  </Button>
</div>
</div>
  )
}