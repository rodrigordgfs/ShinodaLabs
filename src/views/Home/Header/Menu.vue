<template>
  <nav id="menu">
    <button
      aria-label="Abrir menu"
      id="btn-mobile"
      aria-haspop="true"
      aria-controls="menu"
      aria-expanded="false"
      @click="toogleMenu"
    >
      Menu
      <span id="hamburguer"></span>
    </button>
    <ul id="menu__items" role="menu" @click="toogleItemMenu">
      <li v-for="item in menuItems" :key="item.link">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      menuItems: [
        {
          name: "Projetos",
          link: "#projects",
        },
        {
          name: "Sobre min",
          link: "#about",
        },
        {
          name: "Habilidade",
          link: "#skills",
        },
      ],
    };
  },

  methods: {
    toogleMenu(event) {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
      const active = menu.classList.contains("active");
      event.currentTarget.setAttribute("aria-expanded", active);
      if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
      }
    },

    toogleItemMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
$white: #ffffff;
$black: #111111;
$gray: #808080;
$red: #c82d35;
$montserrat: "Montserrat", sans-serif;
#menu {
  #menu__items {
    display: flex;
    gap: 5px;
    list-style: none;
    li {
      a {
        display: block;
        font-size: 18px;
        color: $white;
        font-family: $montserrat;
        transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
        padding: 5px 15px;
        &:hover {
          color: $black;
          background-color: $red;
        }
      }
    }
  }
  #btn-mobile {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  #menu {
    button {
      color: $white;
      font-weight: bold;
      font-family: $montserrat;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 14px;
      line-height: 20px;
      #hamburguer {
        width: 20px;
        border-top: 2px solid;
        display: block;
        &::after,
        &::before {
          content: "";
          width: 20px;
          height: 2px;
          background: $white;
          display: block;
          margin-top: 5px;
          transition: 0.3s cubic-bezier(0.06, 0.29, 0.19, 1.4);
          position: relative;
        }
      }
    }
    #btn-mobile {
      display: flex;
      padding: 0.5rem 0;
      font-size: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      gap: 0.5rem;
    }
    #menu__items {
      display: block;
      position: absolute;
      width: 100%;
      height: 0;
      top: 70px;
      right: 0;
      background: $black;
      z-index: 1000;
      transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
      visibility: hidden;
      overflow-y: hidden;
      li {
        a {
          color: #ffffff;
          padding: 1rem;
          margin: 0 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
  #menu.active #menu__items {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu.active #hamburguer {
    border-top-color: transparent;
  }
  #menu.active #hamburguer::before {
    transform: rotate(135deg);
  }
  #menu.active #hamburguer::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
