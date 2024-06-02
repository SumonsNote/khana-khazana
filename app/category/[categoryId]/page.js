import CategoryProducts from "@/app/components/CategoryProducts";

export default function CategoryPage({ params: { categoryId } }) {
  const result = categoryId.replace(/%20/g, " ").replace(/%26/g, "&");
  return <CategoryProducts categoryId={result} />;
}
