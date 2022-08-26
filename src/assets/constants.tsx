import { IUnown, Pokemon } from "../models/interfaces";
import pikachu from "./images/pikachu.png";
import scyther from "./images/scyther.png";
import sudowoodo from "./images/sudowoodo.png";
import hitmontop from "./images/hitmontop.png";
import meditite from "./images/meditite.png";
import anorith from "./images/anorith.png";
import kricketot from "./images/kricketot.png";
import woobat from "./images/woobat.png";
import karrablast from "./images/karrablast.png";

import machop from "./images/machop.png";
import geodude from "./images/geodude.png";
import hitmonlee from "./images/hitmonlee.png";
import hitmonchan from "./images/hitmonchan.png";
import magmar from "./images/magmar.png";
import numel from "./images/numel.png";
import cranidos from "./images/cranidos.png";
import axew from "./images/axew.png";

import electrike from "./images/electrike.png";
import electabuzz from "./images/electabuzz.png";
import shinx from "./images/shinx.png";
import lileep from "./images/lileep.png";
import burmy from "./images/burmy.png";
import combee from "./images/combee.png";
import foongus from "./images/foongus.png";
import shelmet from "./images/shelmet.png";

import bulbasaur from "./images/bulbasaur.png";
import clefairy from "./images/clefairy.png";
import chansey from "./images/chansey.png";
import tangela from "./images/tangela.png";
import tentacool from "./images/tentacool.png";
import omanyte from "./images/omanyte.png";
import chikorita from "./images/chikorita.png";
import turtwig from "./images/turtwig.png";

import munna from "./images/munna.png";
import swirlix from "./images/swirlix.png";

import pansage from "./images/pansage.png";
import pansear from "./images/pansear.png";
import panpour from "./images/panpour.png";

export const allPokemon: Pokemon[] = [
    {
        name: "pikachu",
        caught: false,
        number: 24,
        img: pikachu,
    },
    {
        name: "scyther",
        caught: false,
        number: 123,
        img: scyther,
    },
    {
        name: "sudowoodo",
        caught: false,
        number: 185,
        img: sudowoodo,
    },
    {
        name: "hitmontop",
        caught: false,
        number: 237,
        img: hitmontop,
    },
    {
        name: "meditite",
        caught: false,
        number: 307,
        img: meditite,
    },
    {
        name: "anorith",
        caught: false,
        number: 347,
        img: anorith,
    },
    {
        name: "kricketot",
        caught: false,
        number: 401,
        img: kricketot,
    },
    {
        name: "woobat",
        caught: false,
        number: 527,
        img: woobat,
    },
    {
        name: "karrablast",
        caught: false,
        number: 588,
        img: karrablast,
    },

    //2

    {
        name: "machop",
        caught: false,
        number: 66,
        img: machop,
    },
    {
        name: "geodude",
        caught: false,
        number: 74,
        img: geodude,
    },
    {
        name: "hitmonlee",
        caught: false,
        number: 106,
        img: hitmonlee,
    },
    {
        name: "hitmonchan",
        caught: false,
        number: 107,
        img: hitmonchan,
    },
    {
        name: "magmar",
        caught: false,
        number: 126,
        img: magmar,
    },
    {
        name: "numel",
        caught: false,
        number: 322,
        img: numel,
    },
    {
        name: "cranidos",
        caught: false,
        number: 408,
        img: cranidos,
    },
    {
        name: "axew",
        caught: false,
        number: 610,
        img: axew,
    },

    // 3
    {
        name: "electrike",
        caught: false,
        number: 309,
        img: electrike,
    },
    {
        name: "electabuzz",
        caught: false,
        number: 125,
        img: electabuzz,
    },
    {
        name: "shinx",
        caught: false,
        number: 403,
        img: shinx,
    },
    {
        name: "lileep",
        caught: false,
        number: 345,
        img: lileep,
    },
    {
        name: "burmy",
        caught: false,
        number: 412,
        img: burmy,
    },
    {
        name: "combee",
        caught: false,
        number: 415,
        img: combee,
    },
    {
        name: "foongus",
        caught: false,
        number: 590,
        img: foongus,
    },
    {
        name: "shelmet",
        caught: false,
        number: 616,
        img: shelmet,
    },

    //4
    {
        name: "bulbasaur",
        caught: false,
        number: 1,
        img: bulbasaur,
    },
    {
        name: "clefairy",
        caught: false,
        number: 35,
        img: clefairy,
    },
    {
        name: "tentacool",
        caught: false,
        number: 72,
        img: tentacool,
    },
    {
        name: "chansey",
        caught: false,
        number: 113,
        img: chansey,
    },
    {
        name: "tangela",
        caught: false,
        number: 114,
        img: tangela,
    },
    {
        name: "omanyte",
        caught: false,
        number: 138,
        img: omanyte,
    },
    {
        name: "chikorita",
        caught: false,
        number: 152,
        img: chikorita,
    },
    {
        name: "turtwig",
        caught: false,
        number: 387,
        img: turtwig,
    },
    {
        name: "munna",
        caught: false,
        number: 517,
        img: munna,
    },
    {
        name: "swirlix",
        caught: false,
        number: 684,
        img: swirlix,
    },

//regionals
    {
        name: "pansage",
        caught: false,
        number: 511,
        img: pansage,
    },
    {
        name: "pansear",
        caught: false,
        number: 513,
        img: pansear,
    },
    {
        name: "panpour",
        caught: false,
        number: 515,
        img: panpour,
    },
]

export const allUnown : IUnown[] = [
    {
        letter: "B",
        caught: false
    },
    {
        letter: "G",
        caught: false
    },
    {
        letter: "N",
        caught: false
    },
    {
        letter: "O",
        caught: false
    },
    {
        letter: "P",
        caught: false
    },
    {
        letter: "S",
        caught: false
    },
    {
        letter: "X",
        caught: false
    },
];
export const pheromosa_incursion: number[] =  [24, 123, 185, 237, 307, 347, 401, 527, 588, 511];
export const buzzwole_incursion: number[] =  [24, 66, 74, 106, 107, 126, 322, 408, 610, 513];
export const xurkitree_incursion: number[] = [24, 309, 125, 403, 345, 412, 415, 590, 616, 515];
export const nihilego_incursion: number[] = [24, 1, 35, 72, 113, 114, 138, 152, 387, 517, 684];
