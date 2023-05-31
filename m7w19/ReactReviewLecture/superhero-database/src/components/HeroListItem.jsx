function HeroListItem({singleHero}) {
    const keyForHero = Math.random().toString(36);
    return (
        <li key={keyForHero}>
            {singleHero.name}
        </li>
    );
}

export default HeroListItem;