<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
    <div class="container">
      <a class="navbar-brand" href="#">RS2025</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/client">Clients</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/article">Articles</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
        </ul>
        <span class="navbar-text">
          <i class="fa-solid fa-user"></i> Aktivni Korisnik
        </span>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>
