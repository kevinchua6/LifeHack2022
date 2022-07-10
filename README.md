# Recycle Go Where

## Inspiration

Singapore generates **60,000 tonnes** of e-waste annually, which adds up to about 70 mobile phones per person. Around **3,500 tonnes** of consumer e-waste have been collected under the EPR scheme so far. By and large, less than 5% of the e-waste generated is recycled.

These items – which can **contain hazardous materials** such as heavy metals - are often thrown down the chute or left at rubbish centres, **creating potential health and environment risks**. 

People are generally aware of traditional recycling e.g. cans and plastic bottles. However, they are less aware of e-waste recycling, such as what and where e-waste can be recycled.

The current solution to this problem is the information provided at the NEA website for e-waste disposal and recycling. However, they show all the 700+ e-waste recycling points at once, which could be overwhelming for users to filter with ease. This is made worse by the fact that each individual bin also has different rules about what e-waste can be recycled at that bin, which is inconvenient to find bins that can recycle the type of e-waste you have.

## What it does

Recycle Go Where is a convenient platform to find the appropriate e-waste recycling bin nearest to you. It allows searching by e-waste type, so that you can find a recycling bin that is appropriate for the types of e-waste that you have. It also allows searching by postal code, so that you can find bins convenient for you.

Recycle Go Where could be integrated easily into the government’s existing “Go Where” line of websites. This helps our product reach more users as many Singaporeans are already familiar with the “Go Where” websites which was met with overwhelming success during the Covid period.

## How we built it

We developed the web app using TypeScript, React, and Next.js.

## Challenges we ran into

We initially faced many difficulties with the Google Maps API integration. One library we used was rather outdated as it was last updated in 2018. We also faced many import errors as there was very little documentation, that was difficult to extend for our use case.

Furthermore, the API must be used with an API key tied to an account with billing information set up. Hence, we needed to be vigilant and ensure not to accidentally publish our API key onto our public repository amidst the intense hacking.

## Accomplishments that we're proud of

### Usage of Data

The NEA website provides a custom map ([https://www.google.com/maps/d/u/0/viewer?mid=1ySyBcuorBk9s4c59jRkJhceMATM3fF2b&ll=1.3147773748425198%2C103.84707000000002&z=11](https://www.google.com/maps/d/u/0/viewer?mid=1ySyBcuorBk9s4c59jRkJhceMATM3fF2b&ll=1.3147773748425198%2C103.84707000000002&z=11)) containing markers for all the different e-waste recycling bins in Singapore. It is a good treasure trove of information, but it is currently not very easy to navigate (by e-waste type or location). Hence, we extracted the data into a JSON and used that as our data source for the app.

We also repackaged the data into a format that is more intuitive for users. The NEA website organises the recycling points into these categories:

- ICT equipment, Batteries and Lamps only
- Batteries and Lamps only
- Batteries only
- ICT equipment and Batteries only
- All regulated consumer products under First Schedule at [https://go.gov.sg/prod-def-sl](https://go.gov.sg/prod-def-sl)
- Non-regulated products only

This corresponds to the 6 types of bins or recycling drives that the recycling companies provide. However, it is not very convenient for users who have a bag of recyclables such as batteries, 

Furthermore, some terms like “ICT equipment”, “All regulated consumer products” and “Non-regulated products” refer to groups of e-waste, but it may not be obvious to customers what is included in these umbrella terms. The NEA website redirects users to other websites or other parts of the same website, which is highly inconvenient. In our app, we showed users the exact items that can be recycled at each bin.

## What we learned

We learned to work with each other efficiently as time was tight during this hackathon. We delegated the work based on components such that each person would have something to work on that was independent from other’s work. Where there were dependencies (such as frontend relying on backend APIs), we agreed upon the format of the data being passed and gave mock data to help the frontend developers continue working without waiting for the backend to be done.

## What's next for Recycle Go Where

Possible extensions include

- Integrate with the government’s Go Where line of websites