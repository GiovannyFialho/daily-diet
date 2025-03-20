import { type MealsProps } from "@/components/meals";

export const mealsMock: MealsProps[] = [
  {
    date: "12.08.22",
    items: [
      {
        time: "20:00",
        name: "X-Tudo",
        status: {
          type: false,
        },
      },
      {
        time: "16:00",
        name: "Whey protein com leite",
        status: {
          type: true,
        },
      },
      {
        time: "12:30",
        name: "Salada cesar com frango grelhado",
        status: {
          type: true,
        },
      },
      {
        time: "09:30",
        name: "Vitamina de banana com abacate",
        status: {
          type: true,
        },
      },
    ],
  },
  {
    date: "11.08.22",
    items: [
      {
        time: "09:00",
        name: "Omelete",
        status: {
          type: true,
        },
      },
      {
        time: "10:00",
        name: "Pudim",
        status: {
          type: false,
        },
      },
      {
        time: "12:30",
        name: "Salada cesar com frango grelhado",
        status: {
          type: true,
        },
      },
      {
        time: "17:00",
        name: "Pringles",
        status: {
          type: false,
        },
      },
    ],
  },
  {
    date: "12.10.20",
    items: [
      {
        time: "09:01",
        name: "Omelete",
        status: {
          type: true,
        },
      },
      {
        time: "10:01",
        name: "Pudim",
        status: {
          type: false,
        },
      },
      {
        time: "12:31",
        name: "Salada cesar com frango grelhado",
        status: {
          type: true,
        },
      },
      {
        time: "17:01",
        name: "Pringles",
        status: {
          type: false,
        },
      },
    ],
  },
];
