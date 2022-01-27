<template>
  <section class="searchform">
    <form action="">
      <label for="s" class="searchform-label">Encontre seu produto</label>
      <div class="searchform-wrap">
        <input
          class="searchform-field"
          type="text"
          name="s"
          id="s"
          placeholder="Encontre seu produto"
        />
        <button class="searchform-button">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
          >
            <path
              fill-rule="evenodd"
              d="M25.7 25.7c-.5.4-1.1.4-1.6 0l-6.2-6.3C16 21 13.6 21.9 11 21.9 4.9 21.9 0 17 0 11 0 4.9 4.9 0 11 0c6 0 10.9 4.9 10.9 11 0 2.6-.9 5-2.5 6.9l6.3 6.2c.4.5.4 1.1 0 1.6zm-6-14.7c0-4.9-3.9-8.8-8.7-8.8-4.9 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.7 8.8 8.7 4.8 0 8.7-3.9 8.7-8.7z"
            />
          </svg>
        </button>
      </div>
    </form>
  </section>
</template>

<style lang="scss">
.searchform {
  margin: 55px 0 75px;
  padding: 24px 44px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &-label {
    width: 100%;
    margin-bottom: 20px;
    color: $secondary-color;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }
  &-wrap {
    display: flex;
  }
  &-field {
    width: 100%;
    height: 46px;
    padding-left: 16px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid $secondary-color;
    border-right: none;
  }
  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 46px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: $primary-color;
    border: none;
    @include transition;

    path {
      fill: #fff;
    }
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }

  @media (min-width: 768px) {
    form {
      display: grid;
      align-items: center;
      grid-template-columns: 240px 1fr;
    }
    &-label {
      margin-bottom: 0;
    }
  }
}
</style>