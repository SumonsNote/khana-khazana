export default function FoodProcess({ recipe }) {
  return (
    <section>
      <div class="container py-12">
        <h3 class="font-semibold text-xl py-6">How to Make it</h3>
        <div>
          <div class="step">
            {recipe.steps.map((step, index) => (
              <>
                <h3>Step {index + 1}</h3>

                <p key={step}>{step}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
