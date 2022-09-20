require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

extraInfo = "Extra Info"
number = "Phone Number"

module.exports = {
  getDatabase: async () => {
    const response = await notion.databases.query({ database_id: databaseId });
      return response.results.map((page) => {
        return {
          name: page.properties.Name.title[0]?.plain_text,
          phone: page.properties.PhoneNumber.rich_text[0]?.plain_text,
          url: page.properties.ExtraInfo.rich_text[0]?.plain_text,
        };
      });
  },
};
