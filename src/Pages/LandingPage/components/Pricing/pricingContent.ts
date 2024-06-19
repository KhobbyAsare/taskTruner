export const PricingContent:{
    plan:string,
    planDes:string,
    price:string,
    planBenefits:string[]
}[] = [
    {
        plan:'Basic',
        planDes:'For individuals who want to keep track of their tasks',
        price:'$20',
        planBenefits:['Task Management','Collaboration','Analytics']
    },
    {
        plan:'Pro',
        planDes:'For teams who want to work together on tasks',
        price:'$50',
        planBenefits:['Task Management','Collaboration','Analytics','Priority Support']
    },
    {
        plan:'Enterprise',
        planDes:'For organizations who want to manage their tasks efficiently',
        price:'$100',
        planBenefits:['Task Management','Collaboration','Analytics','Priority Support','Custom Branding']
    }
]