const xmlString = `
    <person>
        <firstname>John</firstname>
        <lastname>Doe</lastname>
        <dob>1990-01-01</dob>
        <address>
            <country>USA</country>
            <city>New York</city>
            <street_address>123 Main St</street_address>
        </address>
        <contacts>
            <phones>
                <phone>123-456-7890</phone>
                <phone>987-654-3210</phone>
            </phones>
            <socials>
                <twitter>@john_doe</twitter>
                <instagram>@johndoe</instagram>
            </socials>
        </contacts>
    </person>
`;

const jsonString = `
    {
        "person": {
            "firstname": "John",
            "lastname": "Doe",
            "dob": "1990-01-01",
            "address": {
                "country": "USA",
                "city": "New York",
                "street_address": "123 Main St"
            },
            "contacts": {
                "phones": ["123-456-7890", "987-654-3210"],
                "socials": {
                    "twitter": "@john_doe",
                    "instagram": "@johndoe"
                }
            }
        }
    }
`;

// Parse XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

// Parse JSON
const jsonData = JSON.parse(jsonString);

// Print firstname, lastname, and street address
const firstname = xmlDoc.querySelector('firstname').textContent;
const lastname = xmlDoc.querySelector('lastname').textContent;
const streetAddress = jsonData.person.address.street_address;

console.log(`Firstname: ${firstname}`);
console.log(`Lastname: ${lastname}`);
console.log(`Street Address: ${streetAddress}`);