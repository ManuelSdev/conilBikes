import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {format, addYears, addDays} from "date-fns";

const adapter = new AdapterDateFns();
//const today = adapter.date(Date())

const today = new Date();
const nextDay = (days) => addDays(today, days);
const dates = [[new Date(2022, 8, 20)]];
export const bookings = [
  {
    from: new Date(2022, 8, 24),
    to: new Date(2022, 8, 25),
  },
  {
    from: new Date(2022, 8, 26),
    to: new Date(2022, 8, 27),
  },
];
export const bikess = [
  //TEST
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
    // rented: [nextDay(1), nextDay(2)]
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "xxl",
    type: "road",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
    //  rented: [today, nextDay(2)]
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "m",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
    //  rented: [today, nextDay(2)]
  },
  //test

  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "s",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "l",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Turbo Levo Comp",
    size: "m",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96422-50_LEVO-COMP-CARBON-BLK-LTSIL-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Kenevo Comp",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/98022-50_KENEVO-COMP-6FATTIE-LGNBLU-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Chisel",
    size: "l",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "s",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "l",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Turbo Levo Comp",
    size: "m",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96422-50_LEVO-COMP-CARBON-BLK-LTSIL-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Kenevo Comp",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/98022-50_KENEVO-COMP-6FATTIE-LGNBLU-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Chisel",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Scott",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "s",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "l",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/93622-00_ENDURO-SW-BLKLQDMET-BLKLQDMET-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Turbo Levo Comp",
    size: "m",
    type: "mountain",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96422-50_LEVO-COMP-CARBON-BLK-LTSIL-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Kenevo Comp",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/98022-50_KENEVO-COMP-6FATTIE-LGNBLU-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Chisel",
    size: "l",
    type: "mountain",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "mountain",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/91722-70_CHISEL-HT-MRN-ICEPPYA_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "s",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "l",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Turbo Levo Comp",
    size: "m",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Kenevo Comp",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Chisel",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "s",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "l",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Turbo Levo Comp",
    size: "m",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Kenevo Comp",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Chisel",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "s",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "l",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Turbo Levo Comp",
    size: "m",
    type: "city",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Kenevo Comp",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Chisel",
    size: "l",
    type: "city",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "city",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/96120-72_ROLL-LOW-ENTRY-BLK-CHAR-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "s",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "l",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Turbo Levo Comp",
    size: "m",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Kenevo Comp",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Chisel",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "s",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "l",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Turbo Levo Comp",
    size: "m",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Kenevo Comp",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Chisel",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "s",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "l",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Turbo Levo Comp",
    size: "m",
    type: "electric",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Kenevo Comp",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Chisel",
    size: "l",
    type: "electric",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "electric",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "s",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "S-Works Enduro",
    size: "l",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Turbo Levo Comp",
    size: "m",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Kenevo Comp",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "Chisel",
    size: "l",
    type: "road",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Specialized",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "s",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "S-Works Enduro",
    size: "l",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Turbo Levo Comp",
    size: "m",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Kenevo Comp",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "Chisel",
    size: "l",
    type: "road",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Scott",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },

  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "s",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "S-Works Enduro",
    size: "l",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Si buscas montar la bicicleta de enduro más rápida y eficiente, no puedes hacerlo mejor que con el modelo que define el género. La S-Works Enduro se enfrenta felizmente a todos los terrenos.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Turbo Levo Comp",
    size: "m",
    type: "road",
    range: "premium",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Levo ofrece una increíble potencia para recorrer más senderos gracias a una combinación inigualable entre calidad de conducción, potencia utilizable y autonomía. Es el refinamiento, la implementación y la amplificación de todo lo que sabemos sobre el mountain bike: una obsesión de 40 años en crear las mejores bicis de mountain del mundo. Desde su presentación, la Turbo Levo ha marcado el camino a seguir, es la meta por alcanzar de cualquier e-mountain bike, y esta nueva bicicleta vuelve a subir el listón.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Kenevo Comp",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La Kenevo es la eMTB con mayor rendimiento que puedes encontrar, con 180 mm de suspensión delantera y trasera, el motor más suave y potente disponible, y ahora con más kilómetros por carga que nunca. Nuestro modelo Kenevo Comp combina toda esa tecnología con un conjunto de componentes inteligentemente escogidos que soportarán las condiciones y a los usuarios más exigentes.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Rockhopper Sport 29",
    size: "m",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "Lista para el juego con los frenos de disco hidráulicos Shimano MT200, transmisión MicroSHIFT y una horquilla SR Suntour XCM hecha para el ajetreo; la Rockhopper Sport puede lograr la victoria cualquier domingo, ¡y el resto de la semana también!.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "Chisel",
    size: "l",
    type: "road",
    range: "highEnd",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
  {
    brand: "Kross",
    model: "SPARK RC SL EVO AXS",
    size: "l",
    type: "road",
    range: "midRange",
    price: 10,
    specs: ["spec1", "spec2"],
    description:
      "La nueva Chisel ha sido especialmente diseñada para afrontar los trazados modernos de cross country y circuitos de competición con la mayor velocidad. De hecho, comparte muchas de las mismas características modernas que su hermana la Epic Hardtail, pero en un conjunto más económico , Lo que la convierte en la bicicleta rígida de aluminio más eficiente y capaz que existe.",
    images: [
      "https://assets.specialized.com/i/specialized/97222-02_AETHOS-SW-ETAP-CARB-CMLNEYRS-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    ],
    avaiable: true,
  },
];
export const bikes = bikess.map((bike) => ({
  ...bike,
  size: bike.size.toLowerCase(),
}));

/**
 {
        brand: ,
        model: ,
        size: ,
        type: ,
        range: ,
        price: ,
        specs: [],
        description: ,
        images: [],
        avaiable: ,
}

     //   rented: { type: [Date], index: true },


 */

/*
bikes.map((bike, index) => {
    console.log('datasss', format(today, "dd/MM/yyyy"))
    return bike.rented = [today, nextDay(1 + index)]
})
*/
