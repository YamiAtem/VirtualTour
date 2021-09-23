AFRAME.registerComponent('side_view', {
    init: function () {
        this.create_places()
    },

    tick: function () {
        const places_container = document.querySelector("#places-container")
        const { state } = places_container.getAttribute("tour")

        if (state == "view" || state == "change-view") {
            this.el.setAttribute("visible", true)
        } else {
            this.el.setAttribute("visible", false)
        }
    },

    create_places: function () {
        const side_view_container = document.querySelector("#side-view-container")

        let previous_x_pos = -150;
        let previous_y_pos = 30

        for (var i = 1; i <= 4; i++) {
            const position = {
                x: previous_x_pos += 50,
                y: previous_y_pos += 2,
                z: -40
            }

            const entity_el = this.create_place_thumbnail(position, i)
            side_view_container.appendChild(entity_el)
        }
    },

    create_place_thumbnail: function (positon, place_id) {
        const entity_el = document.createElement("a-entity")

        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("id", `place-${place_id}`)

        entity_el.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
        })
        entity_el.setAttribute("material", {
            src: "assets/helicopter.png",
            opacity: 0.9
        })

        entity_el.setAttribute("position", positon)
        entity_el.setAttribute("cursor-listener", {})

        return entity_el;
    }
});
