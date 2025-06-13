import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");

    if (!user) {
      navigate("/");
    }
  }, [navigate]);
};