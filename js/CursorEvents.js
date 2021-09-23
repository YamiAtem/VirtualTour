AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" },
    },

    init: function () {
        this.handleClickEvents();
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleClickEvents: function () {
        this.el.addEventListener("click", event => {
            const places_container = document.querySelector("#places-container");
            const { state } = places_container.getAttribute("tour")
            console.log("Clicked")

            if (state === "places-list") {
                const id = this.el.getAttribute("id")
                const places_id = [
                    "taj-mahal",
                    "budapest",
                    "new-york-city",
                    "eiffel-tower"
                ];

                if (places_id.includes(id)) {
                    places_container.setAttribute("tour", {
                        state: "view",
                        selectedCard: id
                    });
                }
            }

            if (state == "view") {
                this.handleViewState()
            }
            if (state == "change-view") {
                this.handleViewState()
            }
        });
        console.log("Done")
    },

    handleViewState: function () {
        const el = this.el;
        const id = el.getAttribute("id")
        const places_container = document.querySelector("#places-container")
        const { selectedItemId } = places_container.getAttribute("cursor-listener")

        const side_view_places_id = [
            "place-1",
            "place-2",
            "place-3",
            "place-4"
        ];

        if (side_view_places_id.includes(id)) {
            places_container.setAttribute("tour", {
                state: "change-view"
            });

            const sky_el = document.querySelector("#main-container")
            
            sky_el.setAttribute("material", {
                src: `./assets/360_images/${selectedItemId}/${id}.jpg`
            })
        }
    },

    handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
        if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1,
            });
        }
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesListState();
        });
    },
    handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {
                        color: "#0077CC",
                        opacity: 1,
                    });
                }
            }
        });
    },
});