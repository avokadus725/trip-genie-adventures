
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useNavigate } from "react-router-dom";
import { Map } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <Logo size="lg" className="mb-6" />
      
      <div className="mb-6 rounded-full bg-muted p-6">
        <Map size={64} className="text-muted-foreground" />
      </div>
      
      <h1 className="mb-2 text-3xl font-bold">Page Not Found</h1>
      
      <p className="mb-8 max-w-md text-muted-foreground">
        Looks like you've wandered off the map! The page you're looking for
        doesn't exist or has been moved.
      </p>
      
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button 
          className="bg-tripgenie-500 hover:bg-tripgenie-600"
          onClick={() => navigate("/")}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
