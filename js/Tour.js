AFRAME.registerComponent("tour", {
  init: function () {
    this.places_container = this.el;
    this.create_cards();
  },

  create_cards: function () {
    const thumb_nails_ref = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },
      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];

    let prevoius_x_position = -60;

    for (var item of thumb_nails_ref) {
      const pos_x = prevoius_x_position + 25;
      const pos_y = 10;
      const pos_z = -40;
      const position = { x: pos_x, y: pos_y, z: pos_z };
      prevoius_x_position = pos_x;

      // Border Element
      const border_el = this.create_border(position, item.id);

      // Thumbnail Element
      const thumbnail_el = this.create_thumbnail(item);
      border_el.appendChild(thumbnail_el);

      // Title Text Element
      const text_el = this.create_text(position, item);
      border_el.appendChild(text_el);

      this.places_container.appendChild(border_el);
    }

  },
  create_border: function (position, id) {
    const entity_el = document.createElement("a-entity")
    entity_el.setAttribute("id", id)
    entity_el.setAttribute("position", position)
    entity_el.setAttribute("visible", true)

    entity_el.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    });
    entity_el.setAttribute("material", {
      color: "#1181d1",
      opacity: 1
    });

    return entity_el;
  },
  create_thumbnail: function (item) {
    const entity_el = document.createElement("a-entity")

    entity_el.setAttribute("visible", true)

    entity_el.setAttribute("geometry", {
      primitive: "circle",
      radius: 9
    });
    entity_el.setAttribute("material", {
      src: item.url
    });

    return entity_el;
  },
  create_text: function (position, item) {
    const entity_el = document.createElement("a-entity")

    entity_el.setAttribute("visible", true)

    entity_el.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      color: "#d6550f",
      value: item.title,
      width: 70
    });

    const el_position = position
    el_position.y -= 30
    entity_el.setAttribute("position", el_position)

    return entity_el;
  }
});
