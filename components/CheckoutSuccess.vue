<template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <h2>Seu cadastro foi solicitado com sucesso!</h2>
      <NuxtLink to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="266.667"
          width="428"
          xml:space="preserve"
        >
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M0 1995.42h3210V5.422H0Z" />
            </clipPath>
          </defs>
          <g
            clip-path="url(#a)"
            transform="matrix(.13333 0 0 -.13333 0 266.667)"
          >
            <path
              d="M3061.52 1141.24H472.93l617.66 617.73c54.14 54.06 54.14 141.8 0 195.86-54.11 54.1-141.84 54.1-195.86 0L40.59 1100.65c-54.11-54.06-54.11-141.798 0-195.861L894.73 50.57c27.032-27.07 62.5-40.582 97.93-40.582 35.43 0 70.89 13.512 97.93 40.582 54.14 54.102 54.14 141.801 0 195.899L472.93 864.211h2588.59c76.49 0 138.52 62.027 138.52 138.509 0 76.49-62.03 138.52-138.52 138.52z"
            />
          </g>
        </svg>
        Voltar para home
      </NuxtLink>
    </div>
    <div class="modal-close">x</div>
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.8);
  }

  &-content {
    text-align: center;
    max-width: 550px;
    height: auto;
    width: 100%;
    border-radius: 3px;
    padding: 75px 0 55px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;

    svg {
      width: 30px;
    }
  }
}
</style>