import { MainLayout } from "@/components/layouts/Main";
import Films from "@/components/templates/Films/index";
import PickAFilm from "@/components/common/PickAFilm/PickAFilm";

const App = () => {
  return (
    <MainLayout>
      <PickAFilm />
    </MainLayout>
  );
};

export default App;
