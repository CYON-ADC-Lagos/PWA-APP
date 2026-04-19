import Deaneries from "../../../src/Screens/Deaneries";

export function generateMetadata({ params }) {
  const name = decodeURIComponent(params?.name || "Deanery");
  return { title: `${name} Deanery — CYON ADC` };
}

export default function DeaneryPage() {
  return <Deaneries />;
}
