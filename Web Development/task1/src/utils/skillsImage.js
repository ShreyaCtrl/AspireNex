// import * as adobeXd from "../assets/skills/adobe-xd.svg";
// import adobeaudition from "../assets/skills/adobeaudition.svg";
// import afterEffects from "../assets/skills/after-effects.svg";
// import angular from "../assets/skills/angular.svg";
// import aws from "../assets/skills/aws.svg";
// import azure from "../assets/skills/azure.svg";
// import blender from "../assets/skills/blender.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
// import bulma from "../assets/skills/bulma.svg";
import c from "../assets/skills/c.svg";
// import canva from "../assets/skills/canva.svg";
// import capacitorjs from "../assets/skills/capacitorjs.svg";
// import coffeescript from "../assets/skills/coffeescript.svg";
// import cplusplus from "../assets/skills/cplusplus.svg";
// import csharp from "../assets/skills/csharp.svg";
import css from "../assets/skills/css.svg";
// import dart from "../assets/skills/dart.svg";
// import deno from "../assets/skills/deno.svg";
import django from "../assets/skills/django.svg";
// import docker from "../assets/skills/docker.svg";
// import fastify from "../assets/skills/fastify.svg";
import figma from "../assets/skills/figma.svg";
import firebase from "../assets/skills/firebase.svg";
// import flutter from "../assets/skills/flutter.svg";
// import gcp from "../assets/skills/gcp.svg";
// import gimp from "../assets/skills/gimp.svg";
import git from "../assets/skills/git.svg";
// import go from "../assets/skills/go.svg";
// import graphql from "../assets/skills/graphql.svg";
// import haxe from "../assets/skills/haxe.svg";
import html from "../assets/skills/html.svg";
// import illustrator from "../assets/skills/illustrator.svg";
// import ionic from "../assets/skills/ionic.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
// import julia from "../assets/skills/julia.svg";
// import kotlin from "../assets/skills/kotlin.svg";
// import lightroom from "../assets/skills/lightroom.svg";
// import markdown from "../assets/skills/markdown.svg";
import materialui from "../assets/skills/materialui.svg";
import matlab from "../assets/skills/matlab.svg";
// import memsql from "../assets/skills/memsql.svg";
import microsoftoffice from "../assets/skills/microsoftoffice.svg";
import mongoDB from "../assets/skills/mongoDB.svg";
import mysql from "../assets/skills/mysql.svg";
// import nextJS from "../assets/skills/nextJS.svg";
// import nginx from "../assets/skills/nginx.svg";
import numpy from "../assets/skills/numpy.svg";
// import nuxtJS from "../assets/skills/nuxtJS.svg";
import opencv from "../assets/skills/opencv.svg";
// import photoshop from "../assets/skills/photoshop.svg";
import php from "../assets/skills/php.svg";
// import picsart from "../assets/skills/picsart.svg";
// import postgresql from "../assets/skills/postgresql.svg";
// import premierepro from "../assets/skills/premierepro.svg";
import python from "../assets/skills/python.svg";
import pytorch from "../assets/skills/pytorch.svg";
import react from "../assets/skills/react.svg";
// import ruby from "../assets/skills/ruby.svg";
import selenium from "../assets/skills/selenium.svg";
// import sketch from "../assets/skills/sketch.svg";
// import strapi from "../assets/skills/strapi.svg";
// import svelte from "../assets/skills/svelte.svg";
// import swift from "../assets/skills/swift.svg";
import tailwind from "../assets/skills/tailwind.svg";
import tensorflow from "../assets/skills/tensorflow.svg";
// import typescript from "../assets/skills/typescript.svg";
// import unity from "../assets/skills/unity.svg";
import vitejs from "../assets/skills/vitejs.svg";
import collab from "../assets/skills/Collab.png";
import NodeJs from "../assets/skills/Node-js.png";
import pandas from "../assets/skills/Pandas.png";
import flask from "../assets/skills/flask.svg";
import express from "../assets/skills/express-js.svg";
// import vuetifyjs from "../assets/skills/vuetifyjs.svg";
// import webix from "../assets/skills/webix.svg";
// import wolframalpha from "../assets/skills/wolframalpha.svg";
// import wordpress from "../assets/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "express js":
      return express;
    case "collab":
      return collab;
    case "flask":
      return flask;
    case "pandas":
      return pandas;
    case "node js":
      return NodeJs;
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "c":
      return c;
    case "java":
      return java;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "tensorflow":
      return tensorflow;
    case "figma":
      return figma;
    case "ms office":
      return microsoftoffice;
    default:
      break;
  }
};
