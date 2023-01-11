module.exports = {
    "name": "GoodwirTestCard",
    "publisher": "SICAS Center",
    "cards": [{
        "type": "GoodwirTestCardCard",
        "source": "./src/cards/GoodwirTestCard.jsx",
        "title": "Goodwin Test Card",
        "displayCardType": "Goodwin Test Card",
        "description": "Card to test Ellucian Experience SDK",
        "pageRoute": {
            "route": "/",
            "excludeClickSelectors": ['a']
        }
    }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}